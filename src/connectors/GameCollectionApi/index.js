import axios from 'axios';

const API_URL = process.env.API_URL;

const GameCollectionApi = {
  async getGame(id) {
    const result = await axios.get(`${API_URL}/games/${id}`);
    return result;
  },

  async searchGames({ query, page }) {
    let queryString = `q[title_cont]=${query}`;
    if (page) {
      queryString += `&page=${page}`;
    }
    const result = await axios.get(`${API_URL}/games?${queryString}`);
    return result;
  },

  async getUser(id) {
    const result = await axios.get(`${API_URL}/users/${id}`);
    return result;
  },

  async getCurrentUser(token) {
    const result = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: token,
      },
    });
    return result;
  },

  async getGameCollection(collectionId, token) {
    const result = await axios.get(
      `${API_URL}/game_collections/${collectionId ? collectionId : ''}`,
      {
        responseType: 'json',
        headers: {
          accept: '*/*',
          'content-type': 'application/json',
          Authorization: token,
        },
      }
    );
    return result;
  },

  async getGameCollectionItems(collectionId, token) {
    const result = await axios.get(
      `${API_URL}/game_collections/${collectionId}/items`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return result;
  },

  async login({ email, password }) {
    let result;
    try {
      result = await axios.post(`${API_URL}/users/sign_in`, {
        user: {
          email,
          password,
        },
      });
    } catch (e) {
      result = e;
    }

    return result;
  },
};

export default GameCollectionApi;
