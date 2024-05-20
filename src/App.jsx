import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
