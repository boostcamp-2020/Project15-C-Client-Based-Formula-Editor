import { getCustomRepository } from 'typeorm';
import FavoriteRepository from '../repository/favorite-repository';

class FavoriteService {
  static instance: FavoriteService;

  private favoriteRepository: FavoriteRepository;

  constructor() {
    this.favoriteRepository = getCustomRepository(FavoriteRepository);
  }

  static getInstance(): FavoriteService {
    if (!FavoriteService.instance) {
      FavoriteService.instance = new FavoriteService();
    }
    return FavoriteService.instance;
  }

  async getFavorites(userId: number) {
    const favorites = await this.favoriteRepository.find({ user: { id: userId } });
    return favorites;
  }
}

export default FavoriteService;
