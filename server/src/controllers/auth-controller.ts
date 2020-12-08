import { NextFunction, Request, Response } from 'express';
import { ValidateType, isValidateType } from '@utils/validator';
import { STATUS_CODE, ERROR_MESSAGE } from '@utils/constant';
import jwt from 'jsonwebtoken';
import AuthService from '../service/auth-service';
import UserService from '../service/user-service';

interface userInfo {
  email: string;
  nickname: string;
  profileImage: string;
  iat: string;
}

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

  async authCheck(req: Request, res: Response, next: NextFunction) {
    try {
      const { JWT_SECRET } = process.env;
      const jwtSecret = JWT_SECRET === undefined ? '1a2s3d4f5g' : JWT_SECRET;

      const token = req.headers.authorization;
      console.log('token: ', token);
      if (token) {
        const decodedToken = jwt.verify(token, jwtSecret);
        const { email } = decodedToken as userInfo;
        const user = await UserService.getInstance().getUser(email);
        console.log('user: ', user);
        if (user) {
          return next();
        }
      }
      return res
        .status(STATUS_CODE.UNAUTHORIZED)
        .json({ message: ERROR_MESSAGE.UNAUTHORIZED_ERROR });
    } catch (err) {
      return res.status(STATUS_CODE.SERVER_ERROR).json({ message: ERROR_MESSAGE.SERVER_ERROR });
    }
  },
};

export default AuthController;
