import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import wrapper from "./wrapper.js";
import CloseButton from "./modal/closeButton.js";
import MovieBanner from "./modal/movieBanner.js";
import MovieData from "./modal/movieData.js";
import store from "../store.js";
import { SHOW_MODAL } from "../actions/index.js";
import Spinner from "./spinner.js";

const ModalContainerStyled = styled.div`
  background: #0f0e17;
  opacity: 0.93;
  color: #fff;
  position: fixed;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  transition: all 0.5s;
`;
const ModalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class Modal extends Component {
  handleClick = (event) => {
    event.preventDefault();
    store.dispatch({
      type: SHOW_MODAL,
      payload: {
        modal: false,
        modalData: {},
        movieDetail: {},
      },
    });
    this.props.close();
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setState();
    });
  }

  render() {
    const state = store.getState();
    const { modal, modalData, movieDetail } = state;
    const className = `modal ${this.props.statusModal ? "active" : ""}`;
    return ModalContainerStyled({
      class: className,
      children: wrapper({
        children: [
          ModalStyled({
            class: "modal-container",
            children: [
              new MovieBanner({
                poster_path: modalData.poster_path,
                vote_average: modalData.vote_average,
              }),
              new MovieData(),
            ],
          }),
          new CloseButton({
            funcion: this.handleClick,
          }),
        ],
      }),
    });
  }
}

export default Modal;
