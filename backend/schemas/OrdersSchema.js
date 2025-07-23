const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    userId: {
        type: Schema.Types.ObjectId, // or String if you're not using ObjectIds
        required: true,
        ref: "User" // Only if you're referencing a User Model
    },
    createdAt: {
        type: Date,
        default: Date.now, // Adds timestamp automatically
    },
});

module.exports = { OrdersSchema };