import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import CircleFollower from "./CircleFollower.js";
import UseRefHook from "./UseRefHook.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <CircleFollower />
    <UseRefHook />
  </StrictMode>
);
