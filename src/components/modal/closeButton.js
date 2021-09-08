import { Component, createElement } from "../../lib/react/index.js";
import styled from "../../lib/styled-components.js";
import store from "../../store.js";
import { SHOW_MODAL } from "../../actions/index.js";

const ButtonStyled = styled.a`
  position: absolute;
  width: 32px;
  height: 32px;
  right: 83px;
  top: 136px;
`;

class CloseButton extends Component {
  render() {
    return ButtonStyled({
      class: "close-button",
      children: createElement("img", {
        title: "Close Button",
        src: "images/closeIcon.png",
        onClick: this.props.funcion,
      }),
    });
  }
}

export default CloseButton;
