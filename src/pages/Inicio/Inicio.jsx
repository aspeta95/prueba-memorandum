import React from "react";
import { Link } from "react-router-dom";

const inicio = () => {
  return (
    <main className="mb-10">
      <div className="bg-gray-800 text-white py-2">
        <h2 className="max-w-5xl mx-auto text-xl">Popular Titles</h2>
      </div>
      <div className="max-w-5xl mx-auto flex gap-4 mt-10">
        <Link to="/series">
          <div>
            <div className="bg-gray-400 w-[100px] h-[150px] flex place-content-center place-items-center">
              <p>Series</p>
            </div>
            <p>Popular Series</p>
          </div>
        </Link>
        <Link to="/peliculas">
          <div>
            <div className="bg-gray-400 w-[100px] h-[150px] flex place-content-center place-items-center">
              <p>Movies</p>
            </div>
            <p>Popular Movies</p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default inicio;
