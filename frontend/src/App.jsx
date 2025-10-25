import { useState } from "react";
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import StarBackground from "./components/StarBackground";

function App() {
  return <>
    <Router>
      <StarBackground/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </Router>
  </>;
}

export default App;
