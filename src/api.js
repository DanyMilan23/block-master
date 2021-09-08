import { API_KEY } from "./constants.js";

class API {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }
  baseAPI = "https://api.themoviedb.org/3/";
  get discoverMovie() {
    return `${this.baseAPI}discover/movie?api_key=${this.API_KEY}`;
  }

  get discoverMovieDetails() {
    return `${this.baseAPI}movie`;
  }

  async moviePage(page) {
    const response = await fetch(
      `${this.discoverMovie}&page=${page}&language=es`
    );
    const data = await response.json();
    return data;
  }

  async searchMovie(idMovie) {
    const response = await fetch(
      `${this.discoverMovieDetails}/${idMovie}?api_key=${this.API_KEY}&language=es`
    );
    const data = await response.json();
    return data;
  }
}

export default new API(API_KEY);
