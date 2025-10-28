import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../assets/assets";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import HalfRating from "../components/HalfRating";
import { MoveLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Product = () => {
  const { productId } = useParams();
  const product = products.find((p) => String(p.id) === String(productId));

  const [showInfo, setShowInfo] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const panelVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, delay: 0.7, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 50, scale: 0.95, transition: { duration: 0.3 } },
  };

  return (
    <div>
      <div className="relative z-20 flex items-center justify-center gap-3">
        {/* Gallery on the left */}

        <AnimatePresence>
          {showGallery && (
            <motion.div
              className=" flex w-[30%] h-[650px]"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-black  p-3 w-full rounded-2xl">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-gray-500">Screenshot Gallery</h5>
                  <X
                    onClick={() => setShowGallery(!showGallery)}
                    className="text-white cursor-pointer"
                  />
                </div>
                <div
                  className="h-72 w-full mb-10 rounded-2xl border border-gray-600"
                  style={{
                    backgroundImage: `url(${product.images[imageIndex]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="grid grid-cols-3 gap-10 ">
                  {product.images.map((image, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => setImageIndex(index)}
                        className="w-28 h-20 rounded-xl border border-gray-500 cursor-pointer"
                        style={{
                          backgroundImage: `url(${product.images[index]})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
        layout
        transition={{ delay:0.2,duration: 1, ease: "easeInOut" }}
          className="bg-[#15152b] h-[650px] w-[40%] rounded-xl p-2 mb-3 mx-3"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay:0.5,duration: 1.2, ease: "easeOut" }, // 🟩 Slowed down animation
          }}
        >
          <Link
            to="/"
            className="text-sm text-gray-500 flex items-center justify-start"
          >
            <MoveLeft />
            Back to Search
          </Link>

          <img
            src={product.images[0]}
            className="object-cover h-[40%] w-full mt-2 rounded-md"
            alt=""
          />
          <div className="mt-2 px-2 flex justify-between">
            <h2 className="text-white text-lg font-bold">{product.title}</h2>
            <p>
              <span className="text-gray-700 line-through">
                ${product.oldPrice}
              </span>{" "}
              &nbsp;{" "}
              <span className="text-lg text-green-600">
                ${product.newPrice}
              </span>
            </p>
          </div>
          <p className="text-gray-500 text-sm px-2">For stunning visuals</p>
          <p className="text-white my-2 font-semibold px-2">
            Professional visualization and design tools
          </p>
          <p className="text-sm text-gray-500 px-2">
            Product Latest Updates - July 2025
          </p>
          <p className="text-sm text-white px-2">
            <img src={assets.tick} className="h-5 w-5 inline-block" alt="" />{" "}
            <span> Version 25.2 released on June 23, 2025</span>
          </p>
          <p className="text-sm text-white px-2 mb-2">
            <img src={assets.tick} className="h-5 w-5 inline-block" alt="" />{" "}
            <span> Version 25.1 released on March 17, 2025</span>
          </p>
          <div className="flex justify-between items-center px-2">
            <p className="text-gray-500">
              Ratings: <span className="text-white font-semibold">56</span>
            </p>
            <div className="text-white flex ">
              {" "}
              <HalfRating rating={product.rating} /> ({product.rating})
            </div>
          </div>
          <div className="flex justify-center items-center px-2 gap-2 mt-3">
            <button
              onClick={() => {
                setShowGallery(!showGallery);
                setShowInfo(false);
              }}
              className="w-full text-white rounded-md text-center border border-gray-600 hover:text-blue-700 hover:border-blue-700 hover:cursor-pointer py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => {
                setShowInfo(!showInfo);
                setShowGallery(false);
              }}
              className="w-full text-white rounded-md text-center border border-gray-600 hover:text-blue-700 hover:border-blue-700 hover:cursor-pointer py-2"
            >
              More info
            </button>
          </div>

          <div className="px-2 mt-3">
            <button className="text-center w-full  rounded-md bg-blue-400 text-white semi-bold text-lg py-3">
              Buy Now
            </button>
          </div>
        </motion.div>

        {/* More info on the right */}

        <AnimatePresence>
          {showInfo && (
            <motion.div
              className=" flex w-[30%] h-[650px]"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-black  p-3 w-full rounded-2xl">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-gray-500">More Info</h5>
                  <X
                    onClick={() => setShowInfo(!showInfo)}
                    className="text-white cursor-pointer"
                  />
                </div>
                <p className="text-white text-lg mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Adipisci, iste. Aliquid excepturi doloremque minima provident
                  esse nostrum, quasi quia eligendi repellat, explicabo unde
                  repudiandae voluptas!
                </p>
                <h5 className="text-gray-500 mb-2">FAQ</h5>

                <div className="flex items-center justify-between w-full text-lg text-white py-2">
                  <div>What is the price for app?</div> <div>+</div>
                </div>
                <hr className="text-gray-800" />
                <div className="flex items-center justify-between w-full text-lg text-white py-2">
                  <div>Where can I buy it?</div> <div>+</div>
                </div>
                <hr className="text-gray-800" />
                <div className="flex items-center justify-between w-full text-lg text-white py-2">
                  <div>What is the connection speed?</div> <div>+</div>
                </div>
                <hr className="text-gray-800" />
                <div className="flex items-center justify-between w-full text-lg text-white py-2">
                  <div>Can I create presentations with this app?</div>{" "}
                  <div>+</div>
                </div>
                <hr className="text-gray-800 mb-5" />
                <p className="mb-5">
                  <span className="text-gray-600">Last Version Update</span>{" "}
                  &nbsp;&nbsp; <span className="text-gray-400">April,2025</span>
                </p>
                <div className="flex flex-wrap">
                  {product.features.map((feature, index) => {
                    return (
                      <div
                        key={index}
                        className="rounded-full px-2 py-1 m-2 text-xs gap-3 justify-center items-center bg-black border border-gray-600 text-green-500"
                      >
                        {feature}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Product;
