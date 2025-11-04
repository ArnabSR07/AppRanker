import React, { useContext, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { RankerContext } from "../context/RankerContext";
import { Link } from "react-router-dom";
import {ChevronLeft,ChevronRight} from "lucide-react"

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

      {/* product cards Mobile View */}

      {filteredProducts.length > 0 && (<div className="flex gap-2 w-full h-80 justify-center items-center md:hidden">
       <div className="h-15 w-15 rounded-full flex items-center justify-center bg-black">
         <ChevronLeft onClick={prevSlide}/>
       </div>

       <ProductCard product={filteredProducts[currentIndex]}/>

       <div className="h-15 w-15 rounded-full flex items-center justify-center bg-black">
         <ChevronRight onClick={nextSlide}/>
       </div>
      </div>)}

      {/* button below the cards */}
      {filteredProducts.length > 0 && (
        <div className="relative z-20 flex items-center justify-center bottom-10 mt-6">
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
