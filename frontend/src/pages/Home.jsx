import React from 'react'
import { assets } from '../assets/assets'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'
import SearchResultsList from '../components/SearchResultsList'

const Home = () => {
  return (

    <div className='light'
    >
         <Navbar/>
         <Hero/>
         <SearchBar/>
         <SearchResultsList/>
         <Footer/>
    </div>
   

   
  )
}

export default Home