import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Overlay = ({ entry, setOpenOverlay }) => {
  return (
    <div className="fixed top-0 right-0 left-0 w-[100vw] h-[100vh] bg-white flex justify-center items-center p-10">
      <AiFillCloseCircle
        size={24}
        className=" absolute top-20 right-20 cursor-pointer"
        onClick={() => setOpenOverlay(false)}
      />
      <div className="flex gap-8 max-w-xl">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold">{entry.title}</h3>
          <p>
            <b>Description:</b> {entry.description}
          </p>
          <p>
            <b>Date:</b> {entry.releaseYear}
          </p>
        </div>
        <div className="max-w-xs">
          <img src={entry.images["Poster Art"].url} alt={entry.description} />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
