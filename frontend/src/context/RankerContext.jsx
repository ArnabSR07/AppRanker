import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const RankerContext = createContext();

const RankerContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const filteredProducts = (search ? products.filter((product)=> (product.category.toLowerCase()).includes(search.toLowerCase())) : []);
  

  const value = {
    search,
    setSearch,
    filteredProducts
  }

  return (
    <RankerContext.Provider value={value}>
      {props.children}
    </RankerContext.Provider>
  );
};

export default RankerContextProvider;
