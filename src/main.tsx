import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import CircleFollower from "./CircleFollower.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <CircleFollower />
  </StrictMode>
);
