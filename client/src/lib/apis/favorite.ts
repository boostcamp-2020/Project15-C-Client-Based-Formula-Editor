import { API } from './common';
import { FavoriteItem } from '@contexts/user/types';
import { getToken } from '@utils/token';

const favoriteAPI = {
  getFavorites: async (id: number) => {
    const token = await getToken();
    try {
      const response = await API.get(`/favorite/${id}`, {
        headers: { Authorization: token },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  deleteFavorite: async (id: number) => {
    const token = await getToken();
    try {
      const response = await API.delete(`/favorite/${id}`, {
        headers: { Authorization: token },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  createFavorite: async (body: FavoriteItem) => {
    const token = await getToken();
    try {
      const response = await API.post(`/favorite`, body, {
        headers: { Authorization: token },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default favoriteAPI;
