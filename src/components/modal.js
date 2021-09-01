import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import wrapper from "./wrapper.js";
import store from "../store.js";

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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 128px;
`;

class Modal extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState();
    });
  }

  render() {
    const state = store.getState();
    console.log("render modal");
    console.log(state);
    const className = `modal ${state.modal ? "active" : ""}`;
    console.log(className);
    return ModalContainerStyled({
      class: className,
      children: wrapper({
        children: ModalStyled({
          children: createElement("h2", {}, "modal"),
        }),
      }),
    });
  }
}

export default Modal;
