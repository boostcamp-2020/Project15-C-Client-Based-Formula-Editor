import { Request, Response, NextFunction } from 'express';
import FavoriteService from '../service/favorite-service';

const StarController = {
  async getFavorites(req: Request, res: Response, next: NextFunction) {
    try {
      // TODO. StarService에서 DB Access 로직
      // TODO. response 하는 로직
    } catch (err) {
      next(err);
    }
  },

  async createFavorite(req: Request, res: Response, next: NextFuction) {
    try {
    } catch (err) {
      next(err);
    }
  },

  async deleteFavorite(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (err) {
      next(err);
    }
  },
};

export default StarController;
