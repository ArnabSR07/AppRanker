import React, { useContext } from "react";
import ExploreButton from "./ExploreButton";
import { RankerContext } from "../context/RankerContext";

const SearchBar = () => {

 const {search,setSearch} = useContext(RankerContext);





  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[60%]">
        <input
          type="text"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search..."
          className="bg-black text-white py-5 px-5 pr-24 border border-gray-600 rounded-2xl w-full focus:outline-none"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <button className="bg-gray-900 text-gray-500 rounded-full py-3 px-5 text-xl hover:scale-110">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;