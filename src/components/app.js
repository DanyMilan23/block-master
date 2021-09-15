import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Header from "./header.js";
import MovieList from "./movie-list.js";
import Carousel from "./carousel.js";
import Spinner from "./spinner.js";
import Modal from "./modal.js";
import store from "../store.js";
import ModalSearch from "./modal-search.js";

const AppStyled = styled.div`
  margin: 0;
`;

class App extends Component {
  state = {
    modal: false,
    search: false,
  };
  closeModal = () => this.setState({ ...this.state, modal: false });
  openModal = () => this.setState({ ...this.state, modal: true });
  closeModalSearch = () => this.setState({ ...this.state, search: false });
  openModalSearch = () => this.setState({ ...this.state, search: true });
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
        new ModalSearch({
          close: this.closeModalSearch,
          statusModal: this.state.search,
        }),
        new Header({
          open: this.openModalSearch,
        }),
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
