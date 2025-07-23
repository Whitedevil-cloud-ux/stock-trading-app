import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  refreshOrders: 0,
  triggerRefresh: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [refreshOrders, setRefreshOrders] = useState(0); // Start with 0
  const [onOrderPlacedCallback, setOnOrderPlacedCallback] = useState(null); // Added state

  const handleOpenBuyWindow = (uid, onOrderPlaced) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setOnOrderPlacedCallback(() => onOrderPlaced);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setOnOrderPlacedCallback(null);
  };

  const triggerRefresh = () => {
    setRefreshOrders(prev => prev + 1); // This will trigger Orders.js to re-run useEffect
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        refreshOrders,
        triggerRefresh, // Added to context
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow
          uid={selectedStockUID}
          onOrderPlaced={onOrderPlacedCallback}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;