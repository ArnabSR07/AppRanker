import { useState } from "react";
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import StarBackground from "./components/StarBackground";
import RankerContextProvider from "./context/RankerContext";
import Product from "./pages/Product";
import MainLayout from "./layouts/MainLayout";
import Comparision from "./pages/Comparision";
import ImpactDashboard from "./pages/ImpactDashboard";

function App() {
  return <>
  
    <Router>
      <RankerContextProvider>
      <StarBackground/>
    <Routes>
       <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:productId" element={<Product/>}/>
      <Route path="/comparision" element={<Comparision/>}/>
      <Route path="/impact-dashboard" element={<ImpactDashboard/>} />
      </Route>
    </Routes>
    </RankerContextProvider>
    </Router>
  </>;
}

export default App;
