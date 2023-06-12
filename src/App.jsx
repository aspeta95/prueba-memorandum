import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio/Inicio";
import Series from "./pages/Series/Series";
import Peliculas from "./pages/Peliculas/Peliculas";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/series" element={<Series />} />
          <Route path="/peliculas" element={<Peliculas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
