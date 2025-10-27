import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../assets/assets";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import HalfRating from "../components/HalfRating";
import {MoveLeft} from "lucide-react"

const Product = () => {
  const { productId } = useParams();
  const product = products.find((p) => String(p.id) === String(productId));
  

  return (
    <div>
    <div className="relative z-20 flex items-center justify-center">
      <div className="bg-[#15152b] h-[650px] w-[40%] rounded-xl p-2 mb-3">
          <Link to="/" className="text-sm text-gray-500 flex items-center justify-start"><MoveLeft/>Back to Search</Link>
          
            <img src={product.image} className="object-cover h-[40%] w-full mt-2 rounded-md" alt="" />
            <div className="mt-2 px-2 flex justify-between">
              <h2 className="text-white text-lg font-bold">{product.title}</h2>
              <p><span className="text-gray-700 line-through">${product.oldPrice}</span> &nbsp; <span className="text-lg text-green-600">${product.newPrice}</span></p>
            </div>
            <p className="text-gray-500 text-sm px-2">For stunning visuals</p>
            <p className="text-white my-2 font-semibold px-2">Professional visualization and design tools</p>
            <p className="text-sm text-gray-500 px-2">Product Latest Updates - July 2025</p>
            <p className="text-sm text-white px-2"><img src={assets.tick} className="h-5 w-5 inline-block" alt="" /> <span> Version 25.2 released on June 23, 2025</span></p>
             <p className="text-sm text-white px-2 mb-2"><img src={assets.tick} className="h-5 w-5 inline-block" alt="" /> <span> Version 25.1 released on March 17, 2025</span></p>
             <div className="flex justify-between items-center px-2">
              <p className="text-gray-500">Ratings: <span className="text-white font-semibold">56</span></p>
              <p className="text-white"> <HalfRating rating={product.rating} /> {product.rating}</p>
             </div>
             <div className="flex justify-center items-center px-2 gap-2 mt-3">
              <button className="w-full text-white rounded-md text-center border border-gray-600 hover:text-blue-700 hover:border-blue-700 hover:cursor-pointer py-2">Gallery</button>
              <button className="w-full text-white rounded-md text-center border border-gray-600 hover:text-blue-700 hover:border-blue-700 hover:cursor-pointer py-2">More info</button>
             </div>
             
             <div className="px-2 mt-3">
              <button className="text-center w-full  rounded-md bg-blue-400 text-white semi-bold text-lg py-3">Buy Now</button>
             </div>
             
             
      </div>
    </div>
    </div>
  );
};

export default Product;
