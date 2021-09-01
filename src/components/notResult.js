import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Wrapper from "./wrapper.js";

const BannerDiv = styled.div`
  background: transparent;
  text-align: center;
`;

class NotResult extends Component {
  render() {
    var className;
    if (this.props.title === undefined || this.props.title === "") {
      className = "not-result hidden";
    } else if (this.props.list !== undefined) {
      if (this.props.list.length === 0) {
        className = "not-result";
      } else {
        className = "not-result hidden";
      }
    }
    return BannerDiv({
      /* class: `not-result ${
        this.props.title === undefined || this.props.list === undefined
          ? "hidden"
          : ""
      }`, */
      class: className,
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
