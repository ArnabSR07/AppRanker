import { v4 as uuidv4 } from 'uuid';


import logo from "./logo.png"
import profile from "./profile.jpg"
import plus from "./greenplus.png"
import copilot from "./copilot.jpg"
import jetbrains from "./jetbrains.jpeg"
import chatgpt from "./chatgpt.png"
import gptlogo from "./gptlogo.png"
import copilotlogo from "./copilotlogo.jpg"
import brainslogo from "./brainslogo.png"
import adobePremier from "./adobePremier.jpeg"
import adobelogo from "./adobelogo.jpg"
import filmora from "./filmora.avif"
import filmoralogo from "./filmoralogo.webp"
import imovie from "./imovie.jpg"
import imovielogo from "./imovielogo.jpg"

export const assets={
    profile,
    logo,
    plus
}


export const products=[
    {
        id:uuidv4(),
        icon:gptlogo,
        image:chatgpt,
        title:"Chat GPT",
        description:"AI powered Chat Bot",
        oldPrice:10,
        newPrice:0,
        category:"AI chatbots"
    },
    {
        id:uuidv4(),
        icon:copilotlogo,
        image:copilot,
        title:"Copilot",
        description:"Code Automation Tool",
        oldPrice:10,
        newPrice:0,
        category:"AI chatbots"
    },
    {
        id:uuidv4(),
        icon:brainslogo,
        image:jetbrains,
        title:"Jetbrains AI",
        description:"Intelligent Coding Tool",
        oldPrice:10,
        newPrice:0,
        category:"AI chatbots"
    },
    {
        id:uuidv4(),
        icon:adobelogo,
        image:adobePremier,
        title:"Adobe Premiere Pro",
        description:"Intelligent Video Editing Tool",
        oldPrice:10,
        newPrice:0,
        category:"Video Editing Tools"
    },
    {
        id:uuidv4(),
        icon:imovielogo,
        image:imovie,
        title:"iMovie",
        description:"Video Editing Made Easy",
        oldPrice:10,
        newPrice:0,
        category:"Video Editing Tools"
    },
    {
        id:uuidv4(),
        icon:filmoralogo,
        image:filmora,
        title:"Filmora",
        description:"Video Editing at your Fingertips",
        oldPrice:10,
        newPrice:0,
        category:"Video Editing Tools"
    }
]