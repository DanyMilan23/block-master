import { Component, createElement } from "../../lib/react/index.js";
import styled from "../../lib/styled-components.js";

const MenuStyled = styled.div`
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  padding: 8px 0;
`;

class MenuPhone extends Component {
  handleClick = () => {
    this.props.open();
  };
  render() {
    return MenuStyled({
      class: "menu-phone",
      children: [
        createElement("img", {
          class: "icon-button",
          src: "images/menu-sandwich.png",
        }),
        createElement("img", {
          class: "icon-button",
          src: "images/searchIconYellow.png",
          onClick: this.handleClick,
        }),
      ],
    });
  }
}

export default MenuPhone;
