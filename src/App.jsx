import { useState } from "react";
import Box from "@mui/material/Box";
import Route from "./Route";
import { useUser } from "./Context/user";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const {user} = useUser()
  console.log(user)
  return (
    <>
      <Route />
      <ToastContainer />
    </>
  );
}

export default App;
