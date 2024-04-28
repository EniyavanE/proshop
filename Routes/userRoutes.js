import express from 'express';
const router = express.Router();
//import products from '../data/products.js';
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserById, deleteUser, updateUser } from '../controllers/userController.js';
import { admin, protect } from '../middleware/authMiddleware.js';
router.get('/', protect, admin, getUsers)
router.post('/', registerUser)
router.post('/logout', logoutUser)
router.post('/auth', authUser)
router.get('/:id', getUserById)
router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile);
router.get('/:id', getUserById)
router.delete('/:id', protect, admin, deleteUser);
router.put('/:id', protect, admin, updateUser)

export default router