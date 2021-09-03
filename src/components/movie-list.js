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
  grid-template-columns: repeat(auto-fit, 220px);
  justify-content: center;
  box-sizing: border-box;
  gap: 25px;
  margin-bottom: 128px;
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
    const movieList = state.movieList;
    return Wrapper({
      children: [
        new NotResult({
          title: state.list.searchTitle,
          list: state.list.search,
        }),
        movieListStyled({
          children: movieListId.map((id) => new Movie(movieList.get(id))),
        }),
      ],
    });
  }
}

export default MovieList;
