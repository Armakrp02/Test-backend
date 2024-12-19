const mongoose = require("mongoose");

// Create Collection for orders
const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // ID of the user who placed the order
  items: [
    {
      productId: { type: String, required: true }, // ID of the product
      quantity: { type: Number, required: true }, // Quantity of the product ordered
      price: { type: Number, required: true }, // Price of the product at the time of order
    },
  ],
  totalAmount: { type: Number, required: true }, // Total price for the order
  status: { type: String, default: "Pending" }, // Status of the order (e.g., Pending, Completed, Cancelled)
  createdAt: { type: Date, default: Date.now }, // Date when the order was created
  updatedAt: { type: Date, default: Date.now }, // Date when the order was last updated
});

// Middleware to update the updatedAt field
orderSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

