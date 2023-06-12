import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 py-3 px-6 text-white">
      <div className="flex justify-between max-w-5xl mx-auto items-center">
        <Link to="/">
          <h1 className="text-4xl">DEMO Streaming</h1>
        </Link>
        <div>
          <button className="mx-6">Log In</button>
          <button className="bg-gray-900 rounded-xl py-2 px-4">
            Start your free trial
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
