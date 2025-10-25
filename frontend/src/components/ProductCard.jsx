import React from 'react'
import { products } from '../assets/assets'

const ProductCard = ({product}) => {
  return (
    <div className='border border-gray-500 p-2 bg-black rounded-2xl h-[80%]'>
        <img className='cover h-[60%] w-full rounded-md' src={product.image} alt="" />
        <div className='flex justify-between items-center'>
            <div className='mt-5'>
                <img src={product.icon} className='h-6 w-6 inline-block me-2' alt="" />
                <div className='text-lg font-bold text-white inline-block'>{product.title}</div>
                <div className='text-gray-500 text-sm'>{product.description}</div>
            </div>

            <div>
                <span className='text-gray-600 me-2 text-sm line-through'>${product.oldPrice}</span>
                <div className='w-15 h-15 p-2 rounded-full text-sm bg-black border border-gray-500 text-green-500 inline'>${product.newPrice}</div>
            </div>

        </div>
    </div>
  )
}

export default ProductCard