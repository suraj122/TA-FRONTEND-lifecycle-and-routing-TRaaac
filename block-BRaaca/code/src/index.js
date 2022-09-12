import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";

import App from "./components/App";

let root = createRoot(document.getElementById("root"));

root.render(<App />);
