import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Wrappper from "./wrapper.js";
import Menu from "./header/menu.js";
import MenuPhone from "./header/menu-phone.js";
import Search from "./header/search.js";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 48px;
  position: sticky;
`;

const HeaderLogo = styled.img`
  height: auto;
  filter: drop-shadow(3px 3px 0 #f2a30c);
`;

class Header extends Component {
  render() {
    return new Wrappper({
      class: "wrapper-header",
      children: HeaderStyled({
        class: "header-container",
        children: [
          HeaderLogo({
            class: "header-logo",
            src: "./images/logo.png",
          }),
          new Menu(),
          new Search(),
          new MenuPhone(),
        ],
      }),
    });
  }
}

export default Header;
