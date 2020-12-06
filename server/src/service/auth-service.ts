import axios from 'axios';
import { URLSearchParams } from 'url';

class AuthService {
  static instance: AuthService;

  constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(code: string) {
    // TODO. DB USER COLUMN 결정 후 USER TABLE에 저장
    // TODO. Client에 어떤식으로 값을 전달해줄 지 결정 및 JWT Token화
    const { CLIENT_ID } = process.env;
    const { CLIENT_SECRET } = process.env;
    const CODE = code;

    const TOKEN_URL = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${CODE}`;
    const { data } = await axios.get(TOKEN_URL);
    const queryString = new URLSearchParams(data);
    const AUTH_TOKEN = queryString.get('access_token');

    const PROFILE_URL = 'https://openapi.naver.com/v1/nid/me';
    const { data: userData } = await axios.get(PROFILE_URL, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    return userData.response;
  }
}

export default AuthService;
