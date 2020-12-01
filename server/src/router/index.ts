import express from 'express';
import favoriteRouter from './favorite-router';

const router = express.Router();

router.use('/favorite', favoriteRouter);

export default router;
