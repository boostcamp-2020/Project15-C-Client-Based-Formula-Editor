/* eslint-disable camelcase */
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { URLSearchParams } from 'url';
import UserService from './user-service';

class AuthService {
  static instance: AuthService;

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(CODE: string) {
    const { CLIENT_ID, CLIENT_SECRET, JWT_SECRET } = process.env;
    // TODO. 좀 더 스마트한 방법으로 수정
    const jwtSecret = JWT_SECRET === undefined ? '1a2s3d4f5g' : JWT_SECRET;

    const TOKEN_URL = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${CODE}`;
    const { data } = await axios.get(TOKEN_URL);
    const queryString = new URLSearchParams(data);
    const ACCESS_TOKEN = queryString.get('access_token');

    const PROFILE_URL = 'https://openapi.naver.com/v1/nid/me';
    const { data: userData } = await axios.get(PROFILE_URL, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    const { email, id: userId } = userData.response;
    const payload = { email, userId };
    const userToken = jwt.sign(payload, jwtSecret);
    let user = await UserService.getInstance().getUser(userId);
    if (!user) {
      user = await UserService.getInstance().createUser({ userId, email });
    }

    return {
      userToken,
      userId: user.id,
    };
  }
}

export default AuthService;
