import React, { useEffect, useState } from "react";
import Overlay from "../../components/Overlay";
import { entries } from "../../data/sample.json";

const peliculas = () => {
  const [intialMovies, setIntialMovies] = useState();
  const [pelicula, setPelicula] = useState();
  const [openOverlay, setOpenOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const filteredMovies = entries.filter(
    (entry) => entry.programType === "movie" && entry.releaseYear >= 2010
  );
  const sortedMovies = filteredMovies.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  useEffect(() => {
    setIntialMovies(sortedMovies);
    setIsLoading(false);
  }, []);

  const handleSelectMovie = (entry) => {
    setOpenOverlay(true);
    setPelicula(entry);
  };

  //console.log(sortedMovies);

  return (
    <section>
      <div className="bg-gray-800 text-white py-2">
        <h2 className="max-w-5xl mx-auto text-xl">Popular Movies</h2>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
        {isLoading && <p>Loading...</p>}

        {sortedMovies &&
          sortedMovies.slice(0, 20).map((entry) => {
            return (
              <div
                key={entry.id}
                className="hover:opacity-60 hover:border-white hover:border-2 hover:cursor-pointer"
                onClick={() => handleSelectMovie(entry)}
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
        {pelicula && openOverlay && (
          <Overlay entry={pelicula} setOpenOverlay={setOpenOverlay} />
        )}
      </div>
    </section>
  );
};

export default peliculas;
