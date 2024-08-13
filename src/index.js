import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./Landing_Page/Home/HomePage";
import Pricing from "./Landing_Page/Pricing/PricingPage";
import Signup from "./Landing_Page/Signup/SignupNow";
import AboutPage from "./Landing_Page/About/AboutPage";
import ProductPage from "./Landing_Page/Products/ProductPage";
import Supportpage from "./Landing_Page/Support/Supportpage"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/support" element={<Supportpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
