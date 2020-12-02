class FavoriteService {
  static instance: FavoriteService;

  // TODO. constructor() {}

  static getInstance(): FavoriteService {
    if (!FavoriteService.instance) {
      FavoriteService.instance = new FavoriteService();
    }
    return FavoriteService.instance;
  }

  async getFavorites() {
    // TODO. DB 로직
  }
}

export default FavoriteService;
