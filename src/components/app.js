import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Header from "./header.js";
import MovieList from "./movie-list.js";
import Carousel from "./carousel.js";
import Spinner from "./spinner.js";

const AppStyled = styled.div``;

class App extends Component {
  render() {
    return AppStyled({
      children: [new Header(), new Carousel(), new MovieList(), new Spinner()],
    });
  }
}

export default App;
