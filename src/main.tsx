import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { MapProvider } from "react-map-gl/maplibre";
import { SourceManager } from "@/components/SourceManager";
import { LayerManager } from "@/components/LayerManager";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MapProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<App />}>
            <Route path="" element={<Navigate to={"/sources"} />} />
            <Route path="/sources" element={<SourceManager />} />
            <Route path="/layers" element={<LayerManager />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MapProvider>
  </StrictMode>
);
