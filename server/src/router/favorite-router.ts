import express from 'express';
import FavoriteController from '@controllers/favorite-controller';

const router = express.Router();

router.get('/:userId', FavoriteController.getFavoritesByUserId);
router.post('/', FavoriteController.createFavorite);
router.delete('/:id', FavoriteController.deleteFavorite);

export default router;
