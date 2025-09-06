import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Auth from "./pages/auth";
import Profile from "./pages/profile";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./content/authcontext";

export default function App() {
  const { authUser } = useAuthContext();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/auth"
          element={!authUser ? <Auth /> : <Navigate to="/profile" />}
        />
        <Route
          path="/profile"
          element={authUser ? <Profile /> : <Navigate to="/auth" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}
