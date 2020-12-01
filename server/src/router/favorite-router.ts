import express from 'express';
import FavoriteController from '../controllers/FavoriteController';

const router = express.Router();

router.get('/', FavoriteController.getFavorites);
router.post('/', FavoriteController.createFavorite);
router.delete('/:id', FavoriteController.deleteFavorite);

export default router;
