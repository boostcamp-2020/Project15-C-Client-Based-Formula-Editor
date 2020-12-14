/* eslint-disable camelcase */
import UserRepository from '@repository/user-repository';
import { getCustomRepository } from 'typeorm';

export interface CreateParams {
  email: string;
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

  async createUser({ email }: CreateParams) {
    const newUser = await this.userRepository.insertUesr({ email });
    return newUser;
  }
}

export default UserService;
