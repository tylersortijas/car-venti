import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SellTrade from "./pages/SellTrade";
import Financing from "./pages/Financing";

function RouterSwitch() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell-my-car" element={<SellTrade />} />
        <Route path="/financing" element={<Financing />} />
      </Routes>
    </HashRouter>
  );
}

export default RouterSwitch;
