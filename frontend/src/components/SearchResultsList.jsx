import React from 'react'
import { products } from '../assets/assets'
import ProductCard from './ProductCard'

const SearchResultsList = () => {
  return (
    <div className='grid grid-cols-3 w-[60%] mx-auto gap-10 mt-10'>
      {products.map((product,index)=>{
        return <div key={index}><ProductCard product={product}/></div>
      })}
    </div>
  )
}

export default SearchResultsList