import { Component, createElement } from "../../../lib/react/index.js";
import styled from "../../../lib/styled-components.js";
import Spinner from "../../spinner.js";
import store from "../../../store.js";

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
`;

const DetailStyled = styled.p`
  font: var(--body1);
  color: var(--grey);
`;

const TitleStyled = styled.h1`
  font: var(--headline1);
  color: white;
  margin: 0;
`;

const SummaryStyled = styled.p`
  font: var(--body1);
  color: white;
  margin: 0;
`;

class Description extends Component {
  /* componentDidMount() {
    store.subscribe(() => {
      this.setState();
    });
  } */

  render() {
    const state = store.getState();
    const { original_title, overview } = state.movieDetail;
    return DescriptionContainer({
      children: [
        TitleStyled({}, original_title),
        SummaryStyled({}, overview),
        DetailsContainer(),
      ],
    });
  }
}

export default Description;
