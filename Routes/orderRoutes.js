import express from 'express';

import {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToDelivered,
    updateOrderToPaid,
    getOrders
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
const router = express.Router();
router.post('/', addOrderItems);
router.get("/", protect, admin, getOrders);
router.get('/mine', protect, getMyOrders);
router.get('/:id', protect, admin, getOrderById);
router.put("./:id/pay", protect, updateOrderToPaid)
router.put('/:id/deliver', protect, admin, updateOrderToDelivered)

export default router;