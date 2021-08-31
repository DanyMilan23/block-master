import { Component, createElement } from "../../lib/react/index.js";
import styled from "../../lib/styled-components.js";

const ButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  gap: 8px;
  background: #0c0e16;
  border: 1px solid #fed941;
  box-sizing: border-box;
  border-radius: 4px;
`;

class ButtonB extends Component {
  render() {
    return ButtonStyled({
      children: [
        createElement("img", {
          src: "images/plusIcon.png",
          alt: "Un boton de ,AS",
        }),
        createElement("a", { class: "content-buttonB" }, "VER DESPUES"),
      ],
    });
  }
}

export default ButtonB;
