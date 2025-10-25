import React from "react";
import ExploreButton from "./ExploreButton";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[60%]">
        <input
          type="text"
          placeholder="Search..."
          className="bg-black text-white py-6 px-5 pr-24 border border-gray-600 rounded-2xl w-full focus:outline-none"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <ExploreButton />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;