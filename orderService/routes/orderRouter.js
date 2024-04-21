const express = require('express');
const { createOrder, getOrderById, updateOrderStatus, deleteOrder } = require('../Controller/orderController');
const validateToken = require('../middleware/tokenValidationMiddleware');

const router = express.Router();

router.post('/', validateToken, createOrder);
router.get('/:id', validateToken, getOrderById);
router.put('/:id', validateToken, updateOrderStatus);
router.delete('/:id', validateToken, deleteOrder);

module.exports = router;
