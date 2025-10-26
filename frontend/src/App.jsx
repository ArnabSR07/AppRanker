import { useState } from "react";
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import StarBackground from "./components/StarBackground";
import RankerContextProvider from "./context/RankerContext";

function App() {
  return <>
  
    <Router>
      <RankerContextProvider>
      <StarBackground/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </RankerContextProvider>
    </Router>
  </>;
}

export default App;
