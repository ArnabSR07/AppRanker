import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, isHovered }) => {
  const navigate = useNavigate();

  const handleClick = (id)=>{
     navigate(`/product/${id}`)
  }

  let reducedTitle = product.title;
  let reducedDescription = product.description;

  if (product.title.length > 10 && !isHovered) {
    reducedTitle = product.title.slice(0, 10) + "...";
  }
  if (product.description.length > 15 && !isHovered) {
    reducedDescription = product.description.slice(0, 10) + "...";
  }

  return (

    <motion.div
    onClick={()=>handleClick(product.id)}
      className="relative z-20 border border-gray-500 p-2 bg-black rounded-2xl h-[80%] opacity-100 cursor-pointer hover:rounded-2xl"
      animate={{
        scale: isHovered ? 1.03 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <img
        className="object-cover  h-[60%] w-full rounded-md "
        src={product.images[0]}
        alt=""
      />
      <div className="flex justify-between items-center">
        <div className="mt-5">
          <img
            src={product.icon}
            className="h-6 w-6 inline-block me-2"
            alt=""
          />
          <div className="text-lg font-bold text-white inline-block">
            {reducedTitle}
          </div>
          <div className="text-gray-500 text-sm">{reducedDescription}</div>
        </div>

        <div>
          <span className="text-gray-600 me-2 text-lg line-through">
            ${product.oldPrice}
          </span>
          <div className="w-20 h-20 p-2 rounded-full font-bold text-lg bg-black border border-gray-400 text-green-500 inline">
            ${product.newPrice}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
