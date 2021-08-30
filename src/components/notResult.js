import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Wrapper from "./wrapper.js";

const BannerDiv = styled.div`
  background: transparent;
  text-align: center;
`;

class NotResult extends Component {
  render() {
    console.log("title", this.props.title);
    console.log("title type", typeof this.props.title);
    return BannerDiv({
      class: `not-result ${this.props.title === undefined ? "hidden" : ""}`,
      children: [
        createElement("img", {
          src: "../../images/notResults.png",
        }),
        createElement(
          "h4",
          {
            class: "resultText",
          },
          `No se encontraron resultados para “${this.props.title}”`
        ),
      ],
    });
  }
}

export default NotResult;
