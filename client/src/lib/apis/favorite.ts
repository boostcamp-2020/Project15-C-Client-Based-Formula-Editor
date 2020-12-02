import { API } from './common';

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
