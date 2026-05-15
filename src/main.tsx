import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainProvider from "./pages/MainProvider.tsx";

import "./sass/main.scss";

const theme = localStorage.getItem("theme");
if (!theme) localStorage.setItem("theme", "day");
document.body.setAttribute("data-type", localStorage.getItem("theme")!);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainProvider></MainProvider>
  </StrictMode>,
);
