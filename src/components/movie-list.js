import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Wrapper from "./wrapper.js";
import Movie from "./movie.js";
import NotResult from "./notResult.js";
import store from "../store.js";
import api from "../api.js";
import { ADD_MOVIES } from "../actions/index.js";

const movieListStyled = styled.section`
  display: grid;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 128px;
`;
const headLineStyled = styled.h1`
  color: white;
  margin-top: 0;
`;

class MovieList extends Component {
  state = { page: 2 };

  getPage = async (page) => {
    const { results } = await api.moviePage(page);
    store.dispatch({
      type: ADD_MOVIES,
      payload: results,
    });
  };

  handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      this.getPage(this.state.page);
      this.setState({
        page: this.state.page + 1,
      });
    }
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setState();
    });
    const observer = new IntersectionObserver(this.handleIntersection);
    observer.observe(window.intersector);
  }

  render() {
    const state = store.getState();
    const movieListId = state.list[state.filter];
    let movieList = state.movieList;
    console.log(state);
    const headLine =
      state.list.search === undefined
        ? "Todas las peliculas"
        : "Resultados de la busqueda";
    return Wrapper({
      class: "wrapper-list",
      children: [
        headLineStyled({ class: "search-headline" }, headLine),
        new NotResult({
          title: state.list.searchTitle,
          list: state.list.search,
        }),
        movieListStyled({
          class: "movie-list",
          children: movieListId.map((id) => {
            const movie = {
              open: this.props.open,
              ...movieList.get(id),
            };
            return new Movie(movie);
          }),
        }),
      ],
    });
  }
}

export default MovieList;
