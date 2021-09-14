import { Component, createElement } from "../../lib/react/index.js";
import styled from "../../lib/styled-components.js";
import store from "../../store.js";
import Description from "./data/description.js";
import Buttons from "./data/slide-buttons.js";

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

class MovieData extends Component {
  render() {
    return DataContainer({
      class: "data-container",
      children: [new Description(), new Buttons()],
    });
  }
}

export default MovieData;
