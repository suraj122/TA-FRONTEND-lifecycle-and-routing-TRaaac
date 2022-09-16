import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Level from "./components/Level";

let root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/category/:category" element={<Level />}>
        <Route path="/category/:category/:level"></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
