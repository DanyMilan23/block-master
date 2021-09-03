import { Component, createElement } from "../../lib/react/index.js";
import styled from "../../lib/styled-components.js";
import store from "../../store.js";

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 565.96px;
  width: 100%;
`;

const TitleStyled = styled.h1`
  font: var(--headline1);
  color: white;
  margin: 0;
`;
const SummaryStyled = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
`;

class MovieData extends Component {
  render() {
    const { original_title, overview } = this.props.data;
    return DataContainer({
      children: [TitleStyled({}, original_title), SummaryStyled({}, overview)],
    });
  }
}

export default MovieData;
