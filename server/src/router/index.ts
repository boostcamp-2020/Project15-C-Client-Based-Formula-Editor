import express from 'express';
import AuthController from '@controllers/auth-controller';
import favoriteRouter from './favorite-router';
import authRouter from './auth-router';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/favorite', AuthController.authCheck, favoriteRouter);

export default router;
