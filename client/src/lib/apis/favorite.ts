import { API } from './common';

interface FavoriteBody {
  title: string;
  latex: string;
  userId: number;
}

export const getFavorites = async (id: number) => {
  try {
    const response = await API.get(`/favorite/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteFavorite = async (id: number) => {
  try {
    const response = await API.delete(`/favorite/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createFavorite = async (body: FavoriteBody) => {
  try {
    const response = await API.post(`/favorite`, body);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
