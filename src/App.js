import React from 'react';
import Home from "./componants/home/Home";
import Product from "./componants/product/Product";
import Navbar from "./componants/navbar/Navebar";
import Video from './componants/video/Video';
import Pdf from './componants/pdf/Pdf';
import'./App.css';
import { Route, Routes, useLocation} from "react-router-dom";

function App() {
  const location = useLocation()
  return(
    <>
    <div className="overflow-hidden">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <>
                <Navbar showIcon = {false} />
                <Home/> 
              </>
            }
            />
            <Route path="product" element={
              <>
                <Navbar direction={"/"} showIcon = {true}/>
                <Product/>
              </>
            }/>
            <Route path="pdf" element={
              <>
                <Navbar direction={"/product"} color = {true} showIcon = {true}/>
                    <Pdf/>
              </>
            }/>
            <Route path="video" element={
              <>
                <Navbar direction={"/product"} color = {true} showIcon = {true}/>
                  <Video/>
              </>
            }/>
          </Routes>
    </div>
    </>
  )
}

export default App;