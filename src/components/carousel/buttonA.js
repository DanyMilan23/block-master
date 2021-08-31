import { Component, createElement } from "../../lib/react/index.js";
import styled from "../../lib/styled-components.js";

const ButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  background: #fed941;
  border-radius: 4px;
  gap: 8px;
`;

class ButtonA extends Component {
  render() {
    return ButtonStyled({
      children: [
        createElement("img", {
          src: "images/playIcon.png",
          alt: "Un boton de play",
        }),
        createElement("a", { class: "content-buttonA" }, "VER AHORA"),
      ],
    });
  }
}

export default ButtonA;
