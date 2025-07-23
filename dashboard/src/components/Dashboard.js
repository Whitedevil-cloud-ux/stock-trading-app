import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  // Add this state
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  // Toggle it to force re-fetch in Orders
  const triggerOrderRefresh = () => {
    setRefreshTrigger(prev => !prev);
  };

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        {/* Pass triggerOrderRefresh to WatchList */}
        <WatchList onOrderPlaced={triggerOrderRefresh} />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route
            path="/orders"
            element={<Orders refreshTrigger={refreshTrigger} />} // Pass trigger
          />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
