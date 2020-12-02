import { Request, Response, NextFunction } from 'express';
import FavoriteService from '../service/favorite-service';

const FavoriteController = {
  async getFavoritesByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      // todo : HTTP status Code 상수화
      const userId = Number(req.params.userId);
      if (Number.isNaN(userId)) {
        res.status(400).json({ message: 'Request Error' });
      }
      const results = await FavoriteService.getInstance().getFavorites(userId);
      res.status(200).json(results);
    } catch (err) {
      res.status(500).json({ message: 'DB Error' });
    }
  },

  async createFavorite(req: Request, res: Response, next: NextFunction) {
    try {
      // TODO. Service Logic
    } catch (err) {
      next(err);
    }
  },

  async deleteFavorite(req: Request, res: Response, next: NextFunction) {
    try {
      // TODO. Service Logic
    } catch (err) {
      next(err);
    }
  },
};

export default FavoriteController;
