import "./index.css";
import { App } from "./App";
import { ColorPickerProvider } from "@contexts/ColorPickerContext";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ColorPickerProvider>
      <App />
    </ColorPickerProvider>
  </StrictMode>,
);
