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
    // TODO. DB USER COLUMN 결정 후 USER TABLE에 저장
    // TODO. Client에 어떤식으로 값을 전달해줄 지 결정 및 JWT Token화
    const { CLIENT_ID, CLIENT_SECRET, JWT_SECRET } = process.env;

    console.log(CODE);

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

    // TODO. profile_url 수정
    const { email, nickname } = userData.response;
    const payload = { email, nickname };
    const userToken = jwt.sign(payload, 'wefoewfnweonfowefn');
    // email을 DB에 조회해서 있으면 바로 리턴
    let user = await UserService.getInstance().getUser(email);
    if (!user) {
      user = await UserService.getInstance().createUser({ email, nickname });
    }
    const result = { userId: user.id };
    return {
      userToken,
      result,
    };
    // client 쪽에서 즐겨찾기 목록을 요청하려면 id
    // return { 유저 ID, 유저 이름, 토큰 }
    // 토큰 -> 크롬 스토리지 // 1. 클라이언트에서 로그인 여부 확인 2. 서버에 API 검증 용도
    // 유저정보를 redux로 관리?
  }
}

export default AuthService;
