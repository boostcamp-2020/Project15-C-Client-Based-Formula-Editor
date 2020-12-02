import { getCustomRepository } from 'typeorm';
import FavoriteRepository from '../repository/favorite-repository';

export interface CreateParams {
  title: string;
  latex: string;
  userId: number;
}

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

  async getFavoritesByUserId(userId: number) {
    const favorites = await this.favoriteRepository.getByUserId(userId);
    return favorites;
  }

  async createFavorites({ latex, title, userId }: CreateParams) {
    return await this.favoriteRepository.createAndSave({ title, latex, userId });
  }

  async deleteFavorites(id: number) {
    await this.favoriteRepository.delete(id);
  }
}

export default FavoriteService;
