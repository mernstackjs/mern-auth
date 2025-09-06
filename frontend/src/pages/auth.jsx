import React from "react";
import { useState } from "react";
import Login from "../components/auth/login";
import Register from "../components/auth/register";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex m-auto my-12 justify-center  w-full">
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Register setIsLogin={setIsLogin} />
      )}
    </div>
  );
}
