import axios from 'axios';

const API_URL = process.env.API_URL;

const GameCollectionApi = {
  async getGame(id) {
    const result = await axios.get(`${API_URL}/games/${id}`);
    return result;
  },

  searchGames() {}
};

export default GameCollectionApi;
