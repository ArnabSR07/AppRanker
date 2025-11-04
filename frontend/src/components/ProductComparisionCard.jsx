import React, { useState } from "react";
import HalfRating from "./HalfRating";
import { motion } from "framer-motion";
import { BsGlobe2 } from "react-icons/bs";
import { TiDeviceDesktop } from "react-icons/ti";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductComparisionCard = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const len = product.images.length;
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % len);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + len) % len);
  };

  return (
    <motion.div
      className="relative z-20 bg-[#121212]  rounded-3xl text-white p-6 flex flex-col justify-between w-full md:w-[350px] shadow-lg border hover:border-gray-500 cursor-pointer border-neutral-800"
      whileHover={{ scale: 1.02 }}
    >
      {/* Badge */}
      {product.badge && (
        <div
          className={`inline-block w-[40%] px-3 py-1 mb-3 rounded-full text-sm font-semibold ${
            product.badge === "Best Price"
              ? "bg-blue-600/20 text-blue-400"
              : product.badge === "Editor's Pick"
              ? "bg-green-600/20 text-green-400"
              : "bg-yellow-600/20 text-yellow-400"
          }`}
        >
          {product.badge}
        </div>
      )}

      {/* Image */}
      <img
        src={product.images[currentIndex]}
        alt={product.title}
        className="rounded-xl mb-4 border h-60 border-neutral-700"
      />

      <div className="flex gap-3 mb-2">
        <div className="border border-gray-600 rounded-full px-1 py-1 cursor-pointer">
          <ChevronLeft onClick={prevSlide} className="text-white" />
        </div>
        <div className="border border-gray-600 rounded-full px-1 py-1 cursor-pointer">
          <ChevronRight onClick={nextSlide} className="text-white" />
        </div>
      </div>

      {/* Info */}
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="text-sm text-neutral-400 mb-4">{product.description}</p>

      {/* Price */}
      <div className="mb-4">
        <span className="text-neutral-500 line-through mr-2">
          ${product.oldPrice}
        </span>
        <span className="text-2xl font-bold text-green-400">
          ${product.newPrice}
        </span>
      </div>

      {/* Features */}
      <div className="mb-4">
        <h3 className="text-sm text-neutral-300 font-semibold mb-3">
          Key Features
        </h3>
        <ul className="space-y-1 text-sm text-neutral-400">
          {product.features.map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="mb-4">
        <h3 className="text-sm text-neutral-300 font-semibold mb-3">
          Key Benefits
        </h3>
        <div className="flex flex-wrap gap-2">
          {product.benefits.map((b, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs text-blue-600 border border-neutral-700 rounded-full"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Teams */}
      <div className="mb-4">
        <h3 className="text-sm text-neutral-300 font-semibold mb-2">
          Target Audience
        </h3>

        <div className="text-sm text-gray-400">Teams</div>
      </div>

      {/* Platforms */}

      <div className="mb-4">
        <h3 className="text-sm text-neutral-300 font-semibold mb-2">
          Supported Platforms
        </h3>

        <div className="flex gap-5 justify-start items-center">
          <div>
            <div className="bg-gray-800 rounded-md p-2">
              <BsGlobe2 className="text-blue-600" />
            </div>
            <p className="text-gray-500 text-xs text-center">Web</p>
          </div>
          <div>
            <div className="bg-gray-800 rounded-md p-2 w-8">
              <TiDeviceDesktop className="text-green-600" />
            </div>
            <p className="text-gray-500 text-xs text-center">Desktop</p>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-4">
        <h3 className="text-sm text-neutral-300 font-semibold mb-1">
          Users Rating
        </h3>
        <HalfRating rating={product.rating} />
        <div className="w-full bg-neutral-800 rounded-full h-2 mt-2">
          <div
            className="bg-green-400 h-2 rounded-full"
            style={{ width: `${95}%` }}
          ></div>
        </div>
        <p className="text-xs text-neutral-400 mt-1">{95}%</p>
      </div>

      {/* Button */}
      <button className="w-full mt-auto py-2 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition">
        Buy Now
      </button>
    </motion.div>
  );
};

export default ProductComparisionCard;
