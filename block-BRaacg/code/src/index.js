import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Level from "./components/Level";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

let root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:category" element={<Level />} />
      <Route path="/:category/:level" element={<Quiz />} />
      <Route path="/:category/:level/:result" element={<Result />} />
    </Routes>
  </BrowserRouter>
);
