import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Header from "./header.js";
import MovieList from "./movie-list.js";
import Carousel from "./carousel.js";
import Spinner from "./spinner.js";
import Modal from "./modal.js";
import store from "../store.js";

const AppStyled = styled.div``;

class App extends Component {
  state = {
    modal: false,
  };
  closeModal = () => this.setState({ modal: false });
  openModal = () => this.setState({ modal: true });
  componentDidMount() {
    store.subscribe(() => {
      this.setState();
    });
  }
  render() {
    const state = store.getState();
    return AppStyled({
      children: [
        new Modal({
          close: this.closeModal,
          statusModal: this.state.modal,
        }),
        new Header(),
        new Carousel(),
        new MovieList({
          open: this.openModal,
        }),
        new Spinner(),
      ],
    });
  }
}

export default App;
