import { Request, Response, NextFunction } from 'express';
import FavoriteService from '../service/favorite-service';

const FavoriteController = {
  async getFavorites(req: Request, res: Response, next: NextFunction) {
    try {
      // TODO. Service Logic
    } catch (err) {
      next(err);
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
