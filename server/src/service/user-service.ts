/* eslint-disable camelcase */
import UserRepository from '@repository/user-repository';
import { getCustomRepository } from 'typeorm';

export interface CreateParams {
  email: string;
  nickname: string;
  profile_image: string;
}

class UserService {
  static instance: UserService;

  private userRepository: UserRepository;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  async getUser(email: string) {
    const user = await this.userRepository.findUser(email);
    return user;
  }

  async createUser({ email, nickname, profile_image }: CreateParams) {
    const newUser = await this.userRepository.insertUesr({ email, nickname, profile_image });
    return newUser;
  }
}

export default UserService;
