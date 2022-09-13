import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Articles from "./components/Articles";
import Peoples from "./components/People";
import Books from "./components/Books";
import Help from "./components/Help";
import SingleArticle from "./components/SingleArticle";
import NotFound from "./components/NotFound";

let root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Header />
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<SingleArticle />} />
        <Route path="/people" element={<Peoples />} />
        <Route path="/books" element={<Books />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);
