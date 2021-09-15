import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Search from "./modal-search/search.js";
import store from "../store.js";

const ModalContainerStyled = styled.div`
  background: #0f0e17;
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
  flex-direction: row;
  padding: 16px 12px;
  position: relative;
  gap: 8px;
`;

class ModalSearch extends Component {
  handleClick = () => {
    this.props.close();
  };
  componentDidMount() {
    store.subscribe(() => {
      this.setState();
    });
  }
  render() {
    const className = `modal ${this.props.statusModal ? "active" : ""}`;
    const state = store.getState();
    return ModalContainerStyled({
      class: className,
      children: ModalStyled({
        children: [
          createElement("img", {
            src: "images/backIcon.png",
            onClick: this.handleClick,
          }),
          new Search({
            close: this.props.close,
          }),
        ],
      }),
    });
  }
}

export default ModalSearch;
