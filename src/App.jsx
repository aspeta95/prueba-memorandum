import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio/Inicio";
import Series from "./pages/Series/Series";
import Peliculas from "./pages/Peliculas/Peliculas";
import { entries as initialEntries } from "./data/sample.json";
import { FiltersContext } from "./context/filters";

const App = () => {
  const [entries] = useState(initialEntries);
  const { filters } = useContext(FiltersContext);

  const filterSeries = (entries) => {
    const filteredSeries = entries.filter(
      (entry) =>
        (entry.programType === "series" &&
          entry.releaseYear >= filters.releaseYear) || filters.releaseYear === "all"
    );
    const sortedSeries = filteredSeries.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    return sortedSeries;
  };

  const filterMovies = (entries) => {
    const filteredMovies = entries.filter(
      (entry) =>
        (entry.programType === "movie" &&
          entry.releaseYear >= filters.releaseYear) ||
        filters.releaseYear === "all"
    );

    const sortedMovies = filteredMovies.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    return sortedMovies;
  };

  const filteredSeries = filterSeries(entries);
  const filteredMovies = filterMovies(entries);
  // console.log(filteredSeries);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/series" element={<Series series={filteredSeries} />} />
          <Route
            path="/peliculas"
            element={<Peliculas peliculas={filteredMovies} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
