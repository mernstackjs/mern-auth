import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Auth from "./pages/auth";
import Profile from "./pages/profile";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Toaster />
    </div>
  );
}
