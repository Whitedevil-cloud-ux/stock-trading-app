import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    axios
      .post("http://localhost:3002/", {}, { withCredentials: true })
      .then((res) => {
        if (res.data.status === true) {
          setIsAuthenticated(true);
        } else {
          window.location.href = "http://localhost:3000/login";
        }
      })
      .catch((err) => {
        console.error("Auth check failed:", err);
        window.location.href = "http://localhost:3000/login";
      });
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Optional loading screen
  }

  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
};

export default Home;
