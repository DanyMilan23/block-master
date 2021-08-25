import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Select from "./select.js";

class Filters extends Component {
  render() {
    return Select({
      children: [
        createElement(
          "option",
          {
            value: "all",
          },
          "Todas"
        ),
        createElement(
          "option",
          {
            value: "most-valued",
          },
          "Más valoradas"
        ),
        createElement(
          "option",
          {
            value: "least-valued",
          },
          "Menos valoradas"
        ),
      ],
    });
  }
}

export default Filters;
