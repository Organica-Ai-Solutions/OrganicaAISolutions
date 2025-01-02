import express from 'express'
import { signup, login, verifyEmail, getMe, updateProfile } from '../controllers/authController.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

// Public routes
router.post('/signup', signup)
router.post('/login', login)
router.get('/verify-email/:token', verifyEmail)

// Protected routes
router.get('/me', protect, getMe)
router.put('/profile', protect, updateProfile)

export default router 