import React, { useContext, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { RankerContext } from "../context/RankerContext";
import { Link } from "react-router-dom";
import {ChevronLeft,ChevronRight} from "lucide-react"
import { FaMagic } from "react-icons/fa";
import { ImPlus } from "react-icons/im"

const SearchResultsList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { filteredProducts } = useContext(RankerContext);
  const [currentIndex,setCurrentIndex] = useState(0);

 const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProducts.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-[60%] mx-auto mt-5">
      {/* product cards Desktop View */}
      <div className="hidden md:flex gap-4 h-80 justify-center">
        {filteredProducts.slice(0, 3).map((product, index) => {
          const isHovered = index === hoveredIndex;
          return (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                flex: isHovered ? 1.8 : 1,
              }}
              transition={{ duration: 0.4, ease: easeInOut }}
              className="overflow-hidden h-80"
            >
              <ProductCard product={product} isHovered={isHovered} />
            </motion.div>
          );
        })}
      </div>

     

      {filteredProducts.length == 0 && (<div className="flex items-center justify-center mt-10 gap-4">
        <button className="z-50 bg-black text-white px-2 py-2 text-xs rounded-full border border-gray-600"><ImPlus className="text-green-500 inline-block me-1"/>Add your App</button>
         <button className="relative bg-gray-900 text-gray-500 rounded-full py-2 px-2 text-sm md:text-xl hover:scale-110"><FaMagic className="text-gray-500 inline-block me-1"/>Explore</button>
      </div>)}

       {/* product cards Mobile View */}

      {filteredProducts.length > 0 && (
        <div
          className="
            md:hidden w-full mt-1 overflow-x-auto
            scrollbar scrollbar-thin
            scrollbar-thumb-gray-600 scrollbar-track-gray-800
            scrollbar-thumb-rounded-full scrollbar-track-rounded-full
          "
          style={{
            scrollbarColor: "#03fc07 #687369", 
            scrollbarWidth: "thin",
          }}
        >
          <div className="flex  gap-1 px-3 py-2">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                className="shrink-0 w-full h-54"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: easeInOut }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* button below the cards */}
      {filteredProducts.length > 0 && (
        <div className="relative z-20 flex items-center justify-center  bottom-4 mt-6">
          <Link to="/comparision">
            <button className="bg-blue-600 text-sm text-white rounded-md px-3  md:rounded-full md:px-6 py-2">
              Compare these options
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchResultsList;
