import React, { useContext, useEffect, useState } from "react";
import Error from "../../components/Error";
import Filters from "../../components/Filters";
import ItemCard from "../../components/ItemCard";
import Loader from "../../components/Loader";
import Overlay from "../../components/Overlay";
import Pagination from "../../components/Pagination";
import { FiltersContext } from "../../context/filters";
import { usePagination } from "../../hooks/usePagination";

const peliculas = ({ peliculas }) => {
  const [pelicula, setPelicula] = useState();
  const [openOverlay, setOpenOverlay] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const { filters, setFilters } = useContext(FiltersContext);
  const {filters, setFilters, handlePrevPage, handleNextPage} = usePagination({items: peliculas})

  useEffect(() => {
    if (peliculas) {
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

  const handleSelectMovie = (entry) => {
    setOpenOverlay(true);
    setPelicula(entry);
  };

  return (
    <section>
      <div className="bg-gray-800 text-white py-2">
        <h2 className="max-w-5xl mx-auto text-xl">Popular Movies</h2>
      </div>
      <Filters />
      <Pagination onChangePrevPage={handlePrevPage} onChangeNextPage={handleNextPage}/>
     
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
        <Loader isLoading={isLoading} />
        <Error error={error} />
        <ItemCard items={peliculas} onSelectItem={handleSelectMovie}/>
      </div>
    </section>
  );
};

export default peliculas;
