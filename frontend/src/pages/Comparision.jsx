import React, { useContext } from "react";
import { RankerContext } from "../context/RankerContext";
import ProductComparisionCard from "../components/ProductComparisionCard";


const Comparision = () => {
  const { filteredProducts } = useContext(RankerContext);
  console.log(filteredProducts);

  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-white text-center">Smart Comparisons for <br /> <span id="decision">Smarter Decisions</span> </h1>
    <div className="min-h-screen p-8 flex flex-col md:flex-row justify-center items-stretch gap-6">
      {filteredProducts.map((product, index) => (
        <ProductComparisionCard key={index} product={product} />
      ))}
    </div>
    </div>
  );
};

export default Comparision;
