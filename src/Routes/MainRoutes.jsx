import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../components/About";
import { Home } from "../components/Home";
import { HomeDecor } from "../components/HomeDecor";
import { Kid } from "../components/Kid";
import {Men} from "../components/Men";
import { Products } from "../components/Products";
import { Women } from "../components/Women";


const MainRoutes = () => {
  return <>
  {/* Navbar and all the routes */}
  <Routes>
    <Route path="/" default element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    < Route path="/products" element={<Products/>}/>
    <Route path= "/products/men" element={<Men/>}/>
    <Route path="/products/women" element={<Women />}/>
    <Route path= "/products/kids" element={<Kid/> }/>
    <Route path="/products/home decor" element={<HomeDecor/>}/>
  
  </Routes>
  </>;
};
export { MainRoutes };
