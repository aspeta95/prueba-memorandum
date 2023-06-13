import React, { useContext, useEffect, useState } from "react";
import Overlay from "../../components/Overlay";
import { FiltersContext } from "../../context/filters";
import Filters from "../../components/Filters";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import ItemCard from "../../components/ItemCard";
import { usePagination } from "../../hooks/usePagination";

const series = ({ series }) => {
  const [serie, setSerie] = useState();
  const [openOverlay, setOpenOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  // const { filters, setFilters } = useContext(FiltersContext);
  const {filters, setFilters, handlePrevPage, handleNextPage} = usePagination({items: series})

  useEffect(() => {
    if (series) {
      setIsLoading(false);
      setFilters({
        itemNumber: 20,
        releaseYear: 2010,
        page: 1,
        firstIndex: 0,
        lastIndex: 20,
      })
    } else {
      setIsLoading(false);
      setError(true);
    }

  }, []);

  const handleSelectSerie = (entry) => {
    setOpenOverlay(true);
    setSerie(entry);
  };

  return (
    <section>
      <div className="bg-gray-800 text-white py-2">
        <h2 className="max-w-5xl mx-auto text-xl">Popular Series</h2>
      </div>
      <Filters />
      <Pagination onChangePrevPage={handlePrevPage} onChangeNextPage={handleNextPage}/>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
        <Loader isLoading={isLoading} />
        <Error error={error} />
        <ItemCard items={series} onSelectItem={handleSelectSerie}/>
        {serie && openOverlay && (
          <Overlay entry={serie} setOpenOverlay={setOpenOverlay} />
        )}
      </div>
    </section>
  );
};

export default series;
