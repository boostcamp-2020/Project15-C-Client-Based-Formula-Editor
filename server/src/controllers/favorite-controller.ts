import { Request, Response } from 'express';
import { ValidateType, isValidateType } from '@utils/validator';
import { STATUS_CODE, ERROR_MESSAGE } from '@utils/constant';
import FavoriteService from '../service/favorite-service';

const FavoriteController = {
  async getFavoritesByUserId(req: Request, res: Response) {
    try {
      const userId = Number(req.params.userId);
      if (!isValidateType(userId, ValidateType.Number)) {
        return res.status(STATUS_CODE.CLIENT_ERROR).json({ message: ERROR_MESSAGE.CLIENT_ERROR });
      }

      const results = await FavoriteService.getInstance().getFavoritesByUserId(userId);
      res.status(STATUS_CODE.SUCCESS).json({ favorites: results });
    } catch (err) {
      res.status(STATUS_CODE.SERVER_ERROR).json({ message: ERROR_MESSAGE.SERVER_ERROR });
    }
  },

  async createFavorite(req: Request, res: Response) {
    try {
      const { title, latex } = req.body;
      const userId = Number(req.body.userId);

      if (
        !isValidateType(title, ValidateType.String) ||
        !isValidateType(latex, ValidateType.String) ||
        !isValidateType(userId, ValidateType.Number)
      ) {
        return res.status(STATUS_CODE.CLIENT_ERROR).json({ message: ERROR_MESSAGE.CLIENT_ERROR });
      }

      const result = await FavoriteService.getInstance().createFavorites({ latex, title, userId });
      res.status(STATUS_CODE.CREATED).json({ favorite: result });
    } catch (err) {
      res.status(STATUS_CODE.SERVER_ERROR).json({ message: ERROR_MESSAGE.SERVER_ERROR });
    }
  },

  async deleteFavorite(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      if (!isValidateType(id, ValidateType.Number)) {
        return res.status(STATUS_CODE.CLIENT_ERROR).json({ message: ERROR_MESSAGE.CLIENT_ERROR });
      }

      await FavoriteService.getInstance().deleteFavorites(id);
      res.status(STATUS_CODE.SUCCESS).json({ message: '즐겨찾기 삭제가 완료 되었습니다.' });
    } catch (err) {
      res.status(STATUS_CODE.SERVER_ERROR).json({ message: ERROR_MESSAGE.SERVER_ERROR });
    }
  },
};

export default FavoriteController;
