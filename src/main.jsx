import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Buttons from "./Events/Btns";

import ArrayData from "./DisplayData/ArrayData";

import PrimitiveData from "./Props/PrimitiveData";

import MiniProject from "./MiniProject";

import "./css.css";

import "./mycss/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Buttons />
  </StrictMode>
);