import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Wrappper from "./wrapper.js";
import Menu from "./header/menu.js";

const HeaderStyled = styled.header`
  border: 3px solid red;
  margin-bottom: 2em;
  padding-block: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 48px;
`;

const HeaderLogo = styled.img`
  max-width: 106.81px;
  height: auto;
  filter: drop-shadow(3px 3px 0 #f2a30c);
`;

class Header extends Component {
  render() {
    return new Wrappper({
      children: HeaderStyled({
        children: [HeaderLogo({ src: "./images/logo.png" }), new Menu()],
      }),
    });
  }
}

export default Header;
