import React from "react";
import Home from './Home'
import Product from './Product'
import About from './About'
import Contact from './Contact'
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import ProductDetails from "./ProductDetails";

const MyAppp = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/*" element={<Product/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Redirect to="/"/> */}
      </Routes>
    </>
  );
};

export default MyAppp;
