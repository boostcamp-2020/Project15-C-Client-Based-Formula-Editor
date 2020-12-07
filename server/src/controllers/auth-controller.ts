import { Request, Response } from 'express';
import { ValidateType, isValidateType } from '@utils/validator';
import { STATUS_CODE, ERROR_MESSAGE } from '@utils/constant';
import AuthService from '../service/auth-service';

const AuthController = {
  async login(req: Request, res: Response) {
    try {
      const { code } = req.body;
      if (!isValidateType(code, ValidateType.String)) {
        return res.status(STATUS_CODE.CLIENT_ERROR).json({ message: ERROR_MESSAGE.CLIENT_ERROR });
      }

      const results = await AuthService.getInstance().login(code);
      res.status(STATUS_CODE.SUCCESS).json({ results });
    } catch (err) {
      res.status(STATUS_CODE.SERVER_ERROR).json({ message: ERROR_MESSAGE.SERVER_ERROR });
    }
  },
};

export default AuthController;
