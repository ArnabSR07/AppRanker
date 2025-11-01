import React from 'react'
import {Button} from "../components/ui/moving-border"
import { FaMagic } from "react-icons/fa";

const ExploreButton = () => {
  return (
    <Button duration={4000} className="text-gray-400 hover:scale-110 hover:cursor-pointer">
        Explore <FaMagic className='text-cyan-800 h-5 w-4'/>
    </Button>
  )
}

export default ExploreButton