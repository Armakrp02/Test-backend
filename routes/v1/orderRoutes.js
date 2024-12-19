const express = require("express");
const router = express.Router();
const orderController = require("../../controllers/OrderController");

router.post("/orders", orderController.createOrder); // Create a new order
router.get("/orders", orderController.getAllOrders); // Get all orders
router.get("/orders/user/:userId", orderController.getOrdersByUser); // Get all orders for a specific user
router.get("/orders/:id", orderController.getOrderById); // Get a specific order by ID
router.put("/orders/:id", orderController.updateOrder); // Update an order
router.delete("/orders/:id", orderController.deleteOrder); // Delete an order

module.exports = router;