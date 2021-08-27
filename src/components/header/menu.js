import { Component, createElement } from "../../lib/react/index.js";
import styled from "../../lib/styled-components.js";
import ElementMenu from "./elementeMenu.js";

class Menu extends Component {
  state = { changed: null };
  handleChange = (id) => {
    this.setState({ changed: id });
  };
  render() {
    return createElement("div", {
      class: "container-menu",
      children: createElement("ul", {
        class: "list-menu",
        children: [
          new ElementMenu({
            value: "all",
            name: "Todos",
            change: this.handleChange,
          }),
          new ElementMenu({
            value: "mostValued",
            name: "Mas valoradas",
            change: this.handleChange,
          }),
          new ElementMenu({
            value: "leastValued",
            name: "Menos valoradas",
            change: this.handleChange,
          }),
        ],
      }),
    });
  }
}

export default Menu;
