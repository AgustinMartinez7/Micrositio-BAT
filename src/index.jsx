import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const HashScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const scrollToHash = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    requestAnimationFrame(scrollToHash);
    const t = setTimeout(scrollToHash, 80);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
};

import "./style.css";
import TPI from "./views/tpi";
import Desafios from "./views/desafios";
import Desktop from "./views/desktop";
import NotFound from "./views/not-found";

const App = () => {
  return (
    <BrowserRouter>
      <HashScroll />
      <Routes>
        <Route path="/tpi" element={<TPI />} />
        <Route path="/desafios" element={<Desafios />} />
        <Route path="/" element={<Desktop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
