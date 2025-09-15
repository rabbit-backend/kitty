import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="" element={<Navigate to={"/layers"} />} />
          <Route path="/layers" element={<div>layers</div>} />
          <Route path="/sprites" element={<div>sprites</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
