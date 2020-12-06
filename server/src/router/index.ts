import express from 'express';
import favoriteRouter from './favorite-router';
import authRouter from './auth-router';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/favorite', favoriteRouter);

export default router;
