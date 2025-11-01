import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { products } from "../assets/assets";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { motion,AnimatePresence } from "framer-motion";

const CompareApps = () => {
  const [showDropDown1, setShowDropDown1] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [input1, setInput1] = useState({});
  const [input2, setInput2] = useState({});

  return (
    <div>
      <h2 className="text-3xl text-white font-bold mb-5">
        App Comaprision Tool
      </h2>
      <div className="bg-cyan-900 flex rounded-lg border-cyan-700 px-3 py-5 gap-6 mb-6">
        <div className="w-full">
          <h5 className="text-gray-300 mb-2">Select App 1</h5>
          <div className="relative flex items-center justify-center">
            <input
              type="text"
              className="rounded-md bg-cyan-950 text-white px-3 py-3 w-full"
              placeholder={input1.title}
              value={input1.title}
              onChange={(e) => setInput1(e.target.value)}
            />
            <MdArrowDropDown
              className="text-white absolute right-3 cursor-pointer"
              onClick={() => setShowDropDown1(!showDropDown1)}
            />
          </div>
          {showDropDown1 && (
            <div className=" bg-black absolute rounded-lg w-80">
              {products.map((product, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      if(product != input2)
                      {setInput1(product);
                      setShowDropDown1(!showDropDown1);}
                    }}
                    className="text-white px-3 cursor-pointer hover:bg-gray-700 py-2"
                  >
                    {product.title}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="w-full">
          <h5 className="text-gray-300 mb-2">Select App 2</h5>
          <div className="relative flex items-center justify-center">
            <input
              type="text"
              className="rounded-md bg-cyan-950 text-white px-3 py-3 w-full"
              value={input2.title}
              placeholder={input2.title}
              onChange={()=>setInput2(e.target.value)}
            />
            <MdArrowDropDown
              className="text-white absolute right-3 cursor-pointer"
              onClick={() => setShowDropDown2(!showDropDown2)}
            />
          </div>
          {showDropDown2 && (
            <div className="bg-black absolute rounded-lg w-80">
              {products.map((product, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      if(product != input1){
                      setInput2(product);
                      setShowDropDown2(!showDropDown2);
                      }
                      
                    }}
                    className="text-white px-3 py-2 cursor-pointer hover:bg-gray-700"
                  >
                    {product.title}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Comaprison Tool */}

      <AnimatePresence>

          {input1?.title && input2?.title && (<motion.div  key="comparison-tool"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }} className="bg-cyan-950 rounded-xl mb-3">
        <div className="flex justify-center  bg-cyan-700 items-center rounded-t-xl px-8 py-3">
          <h3 className="text-gray-300 w-full">FEATURE</h3>
          <h3 className="text-gray-300 w-full">{input1.title ? input1.title.toUpperCase() : ""}</h3>
          <h3 className="text-gray-300 w-full">{input2.title ? input2.title.toUpperCase() : ""}</h3>
        </div>
        <div className="flex justify-center items-center px-8 py-2">
          <h5 className="font-bold text-white w-full">Logo</h5>
          <div className="w-full">
            <img src={input1.icon} alt="Codewizard IDE" className="text-white h-8 w-10" />
          </div>
          <div className="w-full">
            {" "}
            <img src={input2.icon} alt="Marketmate CRM" className="text-white h-8 w-10" />
          </div>
        </div>
        <hr className="text-gray-700" />
        <div className="flex justify-center items-center px-8 py-2">
          <h5 className="font-bold text-white w-full">Vendor</h5>
          <div className="w-full text-gray-300">{input1.vendor}</div>
          <div className="w-full text-gray-300">{input2.vendor}</div>
        </div>
        <hr className="text-gray-700" />
        <div className="flex justify-center items-center px-8 py-2">
          <h5 className="font-bold text-white w-full">Category</h5>
          <div className="w-full text-gray-300">{input1.category}</div>
          <div className="w-full text-gray-300">{input2.category}</div>
        </div>
        <hr className="text-gray-700" />
        <div className="flex justify-center items-center px-8 py-2">
          <h5 className="font-bold text-white w-full">Pricing</h5>
          <div className="w-full text-gray-300">${input1.pricing}/month</div>
          <div className="w-full text-gray-300">${input2.pricing}/month</div>
        </div>
        <hr className="text-gray-700" />
        <div className="flex justify-center items-center px-8 py-2">
          <h5 className="font-bold text-white w-full">Code Editor</h5>
          <div className="w-full text-gray-300">{input1.codeEditor ? <TiTick className="w-6 h-6 text-green-500"/> : <ImCross className="w-5 h-3 text-red-500"/>}</div>
          <div className="w-full text-gray-300">{input2.codeEditor ? <TiTick className="w-6 h-6 text-green-500"/> : <ImCross className="w-5 h-3 text-red-500"/>}</div>
        </div>
        <hr className="text-gray-700" />
        <div className="flex justify-center items-center px-8 py-2">
          <h5 className="font-bold text-white w-full">Debugger</h5>
          <div className="w-full text-gray-300">{input1.debugger ? <TiTick className="w-6 h-6 text-green-500"/> : <ImCross className="w-5 h-3 text-red-500"/>}</div>
          <div className="w-full text-gray-300">{input2.debugger ? <TiTick className="w-6 h-6 text-green-500"/> : <ImCross className="w-5 h-3 text-red-500"/>}</div>
        </div>
        <hr className="text-gray-700" />
        <div className="flex justify-center items-center px-8 py-2">
          <h5 className="font-bold text-white w-full">
            Version Control Integration
          </h5>
          <div className="w-full text-gray-300">{input1.versionControl ? <TiTick className="w-6 h-6 text-green-500"/> : <ImCross className="w-5 h-3 text-red-500"/>}</div>
          <div className="w-full text-gray-300">{input2.versionControl ? <TiTick className="w-6 h-6 text-green-500"/> : <ImCross className="w-5 h-3 text-red-500"/>}</div>
        </div>
        <hr className="text-gray-700" />
        <div className="flex justify-center items-center px-8 py-2">
          <h5 className="font-bold text-white w-full">Lead Management</h5>
          <div className="w-full text-gray-300">{input1.leadManagement ? <TiTick className="w-6 h-6 text-green-500"/> : <ImCross className="w-5 h-3 text-red-500"/>}</div>
          <div className="w-full text-gray-300">{input2.leadManagement ? <TiTick className="w-6 h-6 text-green-500"/> : <ImCross className="w-5 h-3 text-red-500"/>}</div>
        </div>
        <hr className="text-gray-700" />
        <div className="flex justify-center items-center px-8 py-2">
          <h5 className="font-bold text-white w-full">Sales Automation</h5>
          <div className="w-full text-gray-300">{input1.salesAutomation ? <TiTick className="w-6 h-6 text-green-500"/> : <ImCross className="w-5 h-3 text-red-500"/>}</div>
          <div className="w-full text-gray-300">{input2.salesAutomation ? <TiTick className="w-6 h-6 text-green-500"/> : <ImCross className="w-5 h-3 text-red-500"/>}</div>
        </div>
        <hr className="text-gray-700" />
        <div className="flex justify-center items-center px-8 py-2">
          <h5 className="font-bold text-white w-full">Customer Support</h5>
          <div className="w-full text-gray-300">{input1.customerSupport ? <TiTick className="w-6 h-6 text-green-500"/> : <ImCross className="w-5 h-3 text-red-500"/>}</div>
          <div className="w-full text-gray-300">{input1.customerSupport ? <TiTick className="w-6 h-6 text-green-500"/> : <ImCross className="w-5 h-3 text-red-500"/>}</div>
        </div>

        <div className="flex justify-center items-center px-8 py-2">
          <h5 className="font-bold text-white w-full"></h5>
          <div className="w-full text-gray-300">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md">
              Buy Now
            </button>
          </div>
          <div className="w-full text-gray-300">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </motion.div>)}

      </AnimatePresence>

      
    </div>
  );
};

export default CompareApps;
