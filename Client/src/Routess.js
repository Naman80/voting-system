import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/LoginSignup/Login";
import Register from "./pages/Voter/Register";
import AddCandidate from "./pages/Admin/AddCandidate";
import Vote from "./pages/Voter/Vote";
import Results from "./pages/Voter/Results";
const Routess = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="addcandidate" element={<AddCandidate />} />
          <Route path="vote" element={<Vote />} />
          <Route path="results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routess;
