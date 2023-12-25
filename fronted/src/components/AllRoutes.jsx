import React from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Emi from "../components/Emi";

import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/emi" element={<Emi />} />
    </Routes>
  );
};

export default AllRoutes;
