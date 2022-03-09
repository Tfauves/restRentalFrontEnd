import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

const AppRouter = () => {
  return (
    <div style={{ width: "100%", flexDirection: "column" }}>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
