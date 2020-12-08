import { API } from './common';
import { FavoriteItem } from '@contexts/user/types';

const favoriteAPI = {
  getFavorites: async (id: number) => {
    try {
      const response = await API.get(`/favorite/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  deleteFavorite: async (id: number) => {
    try {
      const response = await API.delete(`/favorite/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  createFavorite: async (body: FavoriteItem) => {
    try {
      const response = await API.post(`/favorite`, body);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default favoriteAPI;
