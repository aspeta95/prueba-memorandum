import React, { useContext, useEffect, useState } from "react";
import { entries } from "../data/sample.json";
import { FiltersContext } from "../context/filters";

const Filters = () => {
  const filtersContext = useContext(FiltersContext);
  const [years, setYears] = useState();

  useEffect(() => {
    const uniqueYears = [...new Set(entries.map((entry) => entry.releaseYear))]
      .toSorted()
      .filter((year) => year > 0);

    setYears(uniqueYears);
  }, []);

  const handleChangeItemsNumber = (e) => {
    filtersContext.setFilters({
      ...filtersContext.filters,
      itemNumber: Number(e.target.value),
      lastIndex: Number(e.target.value),
      firstIndex: 0,
      page: 1,
    });
  };

  const handleChangeYear = (e) => {
    const newYear = e.target.value === "all" ? 0 : Number(e.target.value)
    filtersContext.setFilters({
      ...filtersContext.filters,
      releaseYear: newYear,
    });
  };

  const handleChangeInput = (e) => {
    if (e.key === "Enter") {
      filtersContext.setFilters((prev) => ({
        ...prev.filters,
        releaseYear: Number(e.target.value),
      }));
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-4 flex justify-evenly">
      <div>
        {years && (
          <>
            <label>Movie Year: </label>
            <select
              className="bg-white border-gray-400 border-2 rounded-lg"
              onChange={handleChangeYear}
            >
              <option value="all">All</option>
              {years.map((year) => {
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </>
        )}
      </div>

      <div>
        <input
          type="number"
          placeholder="Search for specific year"
          onKeyDown={handleChangeInput}
          className="border-gray-400 border-2 rounded-lg text-center"
        />
      </div>

      <div>
        <label>Number of movies</label>
        <select
          className="bg-white border-gray-400 border-2 rounded-lg text-center"
          onChange={handleChangeItemsNumber}
        >
          <option value="20">Default</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
