import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Header from "./components/Header";
import Battle from "./components/Battle";
import Result from "./components/Result";

let root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/battle" element={<Battle />} />
      <Route path="/battle/result/:player" element={<Result />} />
    </Routes>
  </BrowserRouter>
);
