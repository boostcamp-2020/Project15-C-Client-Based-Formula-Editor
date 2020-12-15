/* eslint-disable camelcase */
import UserRepository from '@repository/user-repository';
import { getCustomRepository } from 'typeorm';

export interface CreateParams {
  email: string;
  userId: string;
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

  async getUser(userId: string) {
    const user = await this.userRepository.findUser(userId);
    return user;
  }

  async createUser({ email, userId }: CreateParams) {
    const newUser = await this.userRepository.insertUesr({ email, userId });
    return newUser;
  }
}

export default UserService;
