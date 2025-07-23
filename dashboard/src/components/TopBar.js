import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

const TopBar = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.post("http://localhost:3002/", {}, { withCredentials: true });
        if (data.status) {
          setUsername(data.user);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Verification error:", error);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3002/logout", {}, { withCredentials: true });
      window.location.href = "http://localhost:3000/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="topbar-container d-flex justify-content-between align-items-center p-2">
      <div className="indices-container d-flex gap-4">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2}</p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
        </div>
      </div>

      {/* User greeting and Logout */}
      <div className="user-info d-flex align-items-center gap-3 me-4">
        {/* {username && <span>Hi, <strong>{username}</strong></span>} */}
        {username && <button className="btn btn-sm btn-danger" onClick={handleLogout}>Logout</button>}
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
