import React from "react";
import { useUser } from "../Context/user";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  let { user, isloading } = useUser();
  
  if (isloading) {
    return <p>Loading...</p>;
  }
  console.log("-->", isloading,  user)
  if (!user?.email) {
    return <Navigate to="/login" />;
  }
  return children;
}
