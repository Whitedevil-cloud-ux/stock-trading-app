import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Orders.css";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [ orders, setOrders ] = useState([]);
  const { refreshOrders } = useContext(GeneralContext);

  useEffect(() => {
    axios
    .get("http://localhost:3002/allOrders", { withCredentials: true})
    .then((res) => {
      const allOrders = res.data;

      // Step : 1 Calculate net quantities of each stock
      const netQtyMap = {};
      allOrders.forEach((order) => {
        const symbol = order.name;
        if (!netQtyMap[symbol]) netQtyMap[symbol] = 0;

        if (order.mode === "BUY") {
          netQtyMap[symbol] += order.qty;
        } else if (order.mode === "SELL") {
          netQtyMap[symbol] -= order.qty;
        }
      });

      // Step : 2 Filter and Update quantities for display
      const filteredOrders = [];
      for (const [symbol, qty] of Object.entries(netQtyMap)) {
        if (qty > 0) {
          // Find last BUY price for display
          const lastBuy = allOrders
            .filter((o) => o.name === symbol && o.mode === "BUY")
            .slice(-1)[0]; // last buy order

          filteredOrders.push({
            _id: symbol, // use symbol as key
            name: symbol,
            qty: qty,
            price: lastBuy?.price || 0,
            mode: "BUY",
          });
        }
      }

      setOrders(filteredOrders);
    })
    .catch((err) => {
      console.error("Failed to fetch orders : ", err);
    });
  }, [refreshOrders]);

  // Simulate price changes every 2 seconds
  useEffect(() => {
  const interval = setInterval(() => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        const currentPrice = Number(order.price); // Convert to number
        const newPrice = currentPrice + (Math.random() - 0.5) * 5; 
        return {
          ...order,
          price: newPrice.toFixed(2), // Return string for display
        };
      })
    );
  }, 2000);

    return () => clearInterval(interval);
  }, []); 

  const handleSell = async (order) => {
    console.log("Trying to sell : ", order);

    const confirmSell = window.confirm(
      `Are you sure you want to sell ${order.qty} shares of ${order.name} ?`
    );
    if(!confirmSell) return;

    try{
      const response = await axios.post(
        "http://localhost:3002/sell",
        {
          symbol: order.name,
          quantity: Number(order.qty),
          avgPrice: Number(order.price),
        },
        { withCredentials: true }
      );

      alert(response.data.message || "Sell successful");

      setOrders((prevOrders) => prevOrders.filter((o) => o._id !== order._id));
    }catch(err){
      console.error("Sell failed : ", err);
      alert(err.response?.data?.error || "Failed to sell stock");
    }
  };
  return (
    <div className="orders">
      <div className="no-orders">
        {orders.length === 0 ? (
          <>
            <p>You haven't placed any orders today</p>
            <Link to={"/"} className="btn">
              Get started
            </Link>
          </>
        ): (
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                return (
                  <tr key={order._id}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td
                      className={
                        order.priceChange > 0 ? "price-up" : order.priceChange < 0 ? "price-down" : ""
                      }
                    >
                      {order.price}
                    </td>
                    <td>{order.mode}</td>
                    <td>
                      {order.mode === "BUY" && (
                        <button onClick={() => handleSell(order)} className="sell-btn">
                          Sell
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Orders;
