require("dotenv").config();

const { authenticateUser } = require("./Middlewares/AuthMiddleware");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const User = require("./model/UserModel");

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", authenticateUser, async (req, res) => {
    try {
      const newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
        userId: req.user.id,
    });

    await newOrder.save();    
    res.status(201).json({ message: "Order placed successfully", order: newOrder });
    } catch (err) {
      console.error("Error creating order: ", err);
      res.status(500).json({ error: "Failed to place order "});
    }
    
});

// Sell the stock a user has owned or bought
app.post("/sell", authenticateUser, async (req, res) => {
  console.log("Sell Request body: ", req.body);
  const userId = req.user.id;
  const { symbol, quantity, price } = req.body;

  if (!symbol || !quantity) {
    return res.status(400).json({ error: "Symbol and quantity are required" });
  }

  try {
    // Get total BUY quantity
    const buyOrders = await OrdersModel.find({
      userId,
      name: symbol,
      mode: "BUY",
    });

    const totalBought = buyOrders.reduce((acc, order) => acc + order.qty, 0);

    // Get total SELL quantity
    const sellOrders = await OrdersModel.find({
      userId,
      name: symbol,
      mode: "SELL",
    });

    const totalSold = sellOrders.reduce((acc, order) => acc + order.qty, 0);

    const availableToSell = totalBought - totalSold;

    // Validation: trying to sell more than available
    if (availableToSell < quantity) {
      return res.status(400).json({
        error: `You only have ${availableToSell} shares of ${symbol} to sell.`,
      });
    }

    // Record the SELL order
    const newSellOrder = new OrdersModel({
      name: symbol,
      qty: quantity,
      price: price || 0, // or fetch from market later
      mode: "SELL",
      userId,
    });

    await newSellOrder.save();

    res.status(200).json({
      message: `Successfully sold ${quantity} shares of ${symbol}`,
      order: newSellOrder,
    });
  } catch (err) {
    console.error("Sell error:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// Fetch all the orders placed by the user
app.get("/allOrders", authenticateUser, async (req, res) => {
    try {
      const userOrders = await OrdersModel.find({ userId: req.user.id }).sort({ createdAt: -1 });
      res.json(userOrders);  
    } catch (err) {
      console.error("Error fetching orders: ", err);
      res.status(500).json({ error: "Failed to fetch orders" });
    }
});

const startServer = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected!");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Failed to connect to DB:", err);
    process.exit(1); // Exit the process if DB connection fails
  }
};

startServer();
