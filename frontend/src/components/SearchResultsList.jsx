import React, { useState } from "react";
import { products } from "../assets/assets";
import ProductCard from "./ProductCard";
import { easeInOut, motion } from "framer-motion";

const SearchResultsList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex w-[60%] mx-auto gap-4 mt-10 h-96">
      {products.slice(0, 3).map((product, index) => {
        const isHovered = index === hoveredIndex;
        return (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              flex: isHovered ? 1.8 : 1,
            }}
            transition={{duration:0.4, ease:easeInOut}}
            className="overflow-hidden h-full"
          >
            <ProductCard product={product} isHovered={isHovered} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default SearchResultsList;