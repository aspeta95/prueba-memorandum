import React, { useEffect, useState } from "react";
import Overlay from "../../components/Overlay";
import { entries } from "../../data/sample.json";

const series = () => {
  const [intialSeries, setIntialSeries] = useState();
  const [serie, setSerie] = useState();
  const [openOverlay, setOpenOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(entries);

  const filteredSeries = entries.filter(
    (entry) => entry.programType === "series" && entry.releaseYear >= 2010
  );
  const sortedSeries = filteredSeries.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  useEffect(() => {
    setIntialSeries(sortedSeries);
    setIsLoading(false);
  }, []);

  const handleSelectSerie = (entry) => {
    setOpenOverlay(true);
    setSerie(entry);
  };

  //console.log(sortedSeries);

  return (
    <section>
      <div className="bg-gray-800 text-white py-2">
        <h2 className="max-w-5xl mx-auto text-xl">Popular Series</h2>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
        {isLoading && <p>Loading...</p>}
        {intialSeries &&
          intialSeries.slice(0, 20).map((entry) => {
            return (
              <div
                key={entry.id}
                className="hover:opacity-60 hover:border-white hover:border-2 hover:cursor-pointer"
                onClick={() => handleSelectSerie(entry)}
              >
                <img
                  src={entry.images["Poster Art"].url}
                  alt={entry.description}
                />

                <p>
                  <b>{entry.title}</b>
                </p>
              </div>
            );
          })}
        {serie && openOverlay && (
          <Overlay entry={serie} setOpenOverlay={setOpenOverlay} />
        )}
      </div>
    </section>
  );
};

export default series;
