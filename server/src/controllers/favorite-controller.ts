import { Request, Response } from 'express';
import FavoriteService from '../service/favorite-service';
import { ValidateType, isValidateType } from '@utils/validator';
import { STATUS_CODE, ERROR_MESSAGE } from '@utils/constant';

const FavoriteController = {
  async getFavoritesByUserId(req: Request, res: Response) {
    try {
      // todo : HTTP status Code 상수화
      const userId = Number(req.params.userId);
      if (!isValidateType(userId, ValidateType.Number)) {
        return res.status(STATUS_CODE.clientError).json({ message: ERROR_MESSAGE.clientError });
      }

      const results = await FavoriteService.getInstance().getFavoritesByUserId(userId);
      res.status(STATUS_CODE.success).json({ favorites: results });
    } catch (err) {
      res.status(STATUS_CODE.serverError).json({ message: ERROR_MESSAGE.serverError });
    }
  },

  async createFavorite(req: Request, res: Response) {
    try {
      // TODO. Service Logic
      const { title, latex } = req.body;
      const userId = Number(req.body.userId);

      if (
        !isValidateType(title, ValidateType.String) ||
        !isValidateType(latex, ValidateType.String) ||
        !isValidateType(userId, ValidateType.Number)
      ) {
        return res.status(STATUS_CODE.clientError).json({ message: ERROR_MESSAGE.clientError });
      }

      const result = await FavoriteService.getInstance().createFavorites({ latex, title, userId });
      res.status(STATUS_CODE.created).json({ favorite: result });
    } catch (err) {
      res.status(STATUS_CODE.serverError).json({ message: ERROR_MESSAGE.serverError });
    }
  },

  async deleteFavorite(req: Request, res: Response) {
    try {
      // TODO. Service Logic
      const id = Number(req.params.id);

      if (!isValidateType(id, ValidateType.Number)) {
        return res.status(STATUS_CODE.clientError).json({ message: ERROR_MESSAGE.clientError });
      }

      await FavoriteService.getInstance().deleteFavorites(id);
      res.status(STATUS_CODE.success).json({ message: '즐겨찾기 삭제가 완료 되었습니다.' });
    } catch (err) {
      res.status(STATUS_CODE.serverError).json({ message: ERROR_MESSAGE.serverError });
    }
  },
};

export default FavoriteController;
