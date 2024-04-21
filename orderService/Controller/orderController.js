const OrderModel = require('../models/orderModel');

const createOrder = async (req, res) => {
    try {
        const { userId, productId, quantity, totalPrice } = req.body;
        const order = await OrderModel.create({
            userId,
            productId,
            quantity,
            totalPrice,
            status: 'pending' // Initial status
        });
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: 'Order creation failed', error: error.message });
    }
};

const getOrderById = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await OrderModel.findById(orderId);
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
        } else {
            res.status(200).json(order);
        }
    } catch (error) {
        res.status(400).json({ message: 'Failed to fetch order', error: error.message });
    }
};

const updateOrderStatus = async (req, res) => {
    try {
        const orderId = req.params.id;
        const { status } = req.body;
        const updatedOrder = await OrderModel.findByIdAndUpdate(orderId, { status }, { new: true });
        if (!updatedOrder) {
            res.status(404).json({ message: 'Order not found' });
        } else {
            res.status(200).json(updatedOrder);
        }
    } catch (error) {
        res.status(400).json({ message: 'Failed to update order status', error: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const deletedOrder = await OrderModel.findByIdAndDelete(orderId);
        if (!deletedOrder) {
            res.status(404).json({ message: 'Order not found' });
        } else {
            res.status(200).json({ message: 'Order deleted successfully' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Failed to delete order', error: error.message });
    }
};

module.exports = {
    createOrder,
    getOrderById,
    updateOrderStatus,
    deleteOrder
};
