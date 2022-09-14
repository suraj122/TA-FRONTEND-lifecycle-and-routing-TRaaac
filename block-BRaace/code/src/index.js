import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";

let root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
