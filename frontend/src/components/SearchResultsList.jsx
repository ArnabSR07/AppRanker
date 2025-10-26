import React, { useContext, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { RankerContext } from "../context/RankerContext";

const SearchResultsList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { filteredProducts } = useContext(RankerContext);

  return (
    <div className="w-[60%] mx-auto mt-5">
      {/* product cards row */}
      <div className="flex gap-4 h-96 justify-center">
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
              className="overflow-hidden h-full"
            >
              <ProductCard product={product} isHovered={isHovered} />
            </motion.div>
          );
        })}
      </div>

      {/* button below the cards */}
      {filteredProducts.length > 0 && (
        <div className="z-20 flex items-center justify-center bottom-5 mt-6">
          <button className="bg-blue-600 text-sm text-white rounded-full px-6 py-2">
            Compare these options
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResultsList;
