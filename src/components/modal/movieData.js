import { Component, createElement } from "../../lib/react/index.js";
import styled from "../../lib/styled-components.js";
import store from "../../store.js";
import Description from "./data/description.js";

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 565.96px;
  width: 100%;
  gap: 40px;
`;

class MovieData extends Component {
  render() {
    return DataContainer({
      children: new Description(),
    });
  }
}

export default MovieData;
