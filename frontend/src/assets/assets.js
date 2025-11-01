import logo from "./logo.png";
import profile from "./profile.jpg";
import plus from "./greenPlus.png";
import copilot from "./copilot.jpg";
import jetbrains from "./jetbrains.jpeg";
import chatgpt from "./chatgpt.png";
import gptlogo from "./gptlogo.png";
import copilotlogo from "./copilotlogo.jpg";
import brainslogo from "./brainslogo.png";
import adobePremier from "./adobePremier.jpeg";
import adobelogo from "./adobelogo.jpg";
import filmora from "./filmora.avif";
import filmoralogo from "./filmoralogo.webp";
import imovie from "./imovie.jpg";
import imovielogo from "./imovielogo.jpg";
import tick from "./tick.png";
import gpt1 from "./gpt1.webp"
import gpt2 from "./gpt2.avif"
import gpt3 from "./gpt3.jpg"
import gpt4 from "./gpt4.avif"
import gpt5 from "./gpt5.webp"
import pilot1 from "./pilot1.webp"
import pilot2 from "./pilot2.webp"
import pilot3 from "./pilot3.webp"
import pilot4 from "./pilot4.avif"
import brains1 from "./brains1.jpg"
import brains2 from "./brains2.jpg"
import brains3 from "./brains3.webp"
import brains4 from "./brains4.png"

export const assets = {
  profile,
  logo,
  plus,
  tick,
};

export const products = [
  {
    id: "aaaa",
    icon: gptlogo,
    badge:"Editor's Pick",
    image: chatgpt,
    images:[chatgpt,gpt1,gpt2,gpt3,gpt4,gpt5],
    title: "Chat GPT",
    description: "AI powered Chat Bot",
    oldPrice: 10,
    newPrice: 0,
    category: "AI chatbots",
    rating: 4,
    features: [
      "Natural Language Processing",
      "Contextual Understanding",
      "Multi-turn Conversations",
      "Integration Capabilities",
    ],
    benefits: [
      "Creating Engaging CRM",
      "Fast 5G build",
      "Comments",
      "Components",
    ],
    pricing:30,
    vendor:"Open AI",
    codeEditor:true,
    debugger:true,
    versionControl:true,
    leadManagement:true,
    salesAutomation:true,
    customerSupport:true
  },
  {
    id: "aaab",
    icon: copilotlogo,
    badge:"Best Price",
    image: copilot,
    images:[copilot,pilot1,pilot2,pilot3,pilot4],
    title: "Copilot",
    description: "Code Automation Tool",
    oldPrice: 10,
    newPrice: 0,
    category: "AI chatbots",
    rating: 4,
    features: [
      "Natural Language Processing",
      "Contextual Understanding",
      "Multi-turn Conversations",
      "Integration Capabilities",
    ],
    benefits: [
      "Creating Engaging CRM",
      "Fast 5G build",
      "Comments",
      "Components",
    ],
    pricing:40,
    vendor:"Microsoft Inc.",
    codeEditor:true,
    debugger:true,
    versionControl:false,
    leadManagement:false,
    salesAutomation:false,
    customerSupport:true
  },
  {
    id: "aaac",
    icon: brainslogo,
    badge:"Best Rating",
    image: jetbrains,
    images:[jetbrains,brains1,brains2,brains3,brains4],
    title: "Jetbrains AI",
    description: "Intelligent Coding Tool",
    oldPrice: 10,
    newPrice: 0,
    category: "AI chatbots",
    rating: 4,
    features: [
      "Natural Language Processing",
      "Contextual Understanding",
      "Multi-turn Conversations",
      "Integration Capabilities",
    ],
    benefits: [
      "Creating Engaging CRM",
      "Fast 5G build",
      "Comments",
      "Components",
    ],
    pricing:30,
    vendor:"IntelliJ",
    codeEditor:true,
    debugger:true,
    versionControl:false,
    leadManagement:false,
    salesAutomation:false,
    customerSupport:false
  },
  {
    id: "aaad",
    icon: adobelogo,
    image: adobePremier,
    images:[adobePremier],
    badge:"Best Price",
    title: "Adobe Premiere Pro",
    description: "Intelligent Video Editing Tool",
    oldPrice: 10,
    newPrice: 0,
    category: "Video Editing Tools",
    rating: 4,
    features: [
      "Natural Language Processing",
      "Contextual Understanding",
      "Multi-turn Conversations",
      "Integration Capabilities",
    ],
    benefits: [
      "Creating Engaging CRM",
      "Fast 5G build",
      "Comments",
      "Components",
    ],
    pricing:50,
    vendor:"Adobe Inc.",
    codeEditor:false,
    debugger:false,
    versionControl:false,
    leadManagement:true,
    salesAutomation:true,
    customerSupport:true
  },
  {
    id: "aaae",
    icon: imovielogo,
    badge:"Editor's Pick",
    image: imovie,
    images:[imovie],
    title: "iMovie",
    description: "Video Editing Made Easy",
    oldPrice: 10,
    newPrice: 0,
    category: "Video Editing Tools",
    rating: 4.5,
    features: [
      "Natural Language Processing",
      "Contextual Understanding",
      "Multi-turn Conversations",
      "Integration Capabilities",
    ],
    benefits: [
      "Creating Engaging CRM",
      "Fast 5G build",
      "Comments",
      "Components",
    ],
    pricing:30,
    vendor:"IMovie Inc.",
    codeEditor:false,
    debugger:true,
    versionControl:true,
    leadManagement:false,
    salesAutomation:true,
    customerSupport:true
  },
  {
    id: "aaaf",
    icon: filmoralogo,
    badge:"Best Rating",
    image: filmora,
    images:[filmora],
    title: "Filmora",
    description: "Video Editing at your Fingertips",
    oldPrice: 10,
    newPrice: 0,
    category: "Video Editing Tools",
    rating: 3.5,
    features: [
      "Natural Language Processing",
      "Contextual Understanding",
      "Multi-turn Conversations",
      "Integration Capabilities",
    ],
    benefits: [
      "Creating Engaging CRM",
      "Fast 5G build",
      "Comments",
      "Components",
    ],
    pricing:40,
    vendor:"Filmora ComapversionControl",
    codeEditor:true,
    debugger:true,
    versionControl:false,
    leadManagement:false,
    salesAutomation:false,
    customerSupport:true
  },
];
