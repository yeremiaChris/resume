import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/layout/Navbar.tsx";
import { BrandIcon } from "./components/icons/BrandIcon.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <footer className="bg-black mt-16 text-white py-8">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-3 font-bold">
          <BrandIcon className="text-white" />
          <h2>Yeremia</h2>
        </div>

        <div className="text-right">
          <h2>@ {new Date().getFullYear()} Personal Portfolio</h2>
          <p>By Yeremia Chris Saragi</p>
        </div>
      </div>
    </footer>
  </React.StrictMode>
);
