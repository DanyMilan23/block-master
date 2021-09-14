import { Component, createElement } from "../../../lib/react/index.js";
import styled from "../../../lib/styled-components.js";
import Spinner from "../../spinner.js";
import store from "../../../store.js";

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: inherit;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  width: inherit;
`;

const DetailStyled = styled.p`
  font: var(--body1);
  color: var(--grey);
`;

const TitleStyled = styled.h1`
  color: white;
  margin: 0;
`;

const SummaryStyled = styled.p`
  color: white;
  margin: 0;
`;

const ElipseStyled = styled.div`
  background: url(images/elipse.png);
  width: 6px;
  height: 6px;
  margin: 8px 0px;
`;

const Detail = styled.p`
  color: var(--grey);
  margin: 0;
`;
class Description extends Component {
  render() {
    const state = store.getState();
    console.log(state);
    const { original_title, overview, genres, release_date, runtime } =
      state.movieDetail;
    let genersResult;
    if (genres !== undefined) {
      const gen = genres.map((genre) => genre.name);
      genersResult = gen.join("/");
    }
    return DescriptionContainer({
      children: [
        TitleStyled({ class: "title-description" }, original_title),
        SummaryStyled({ class: "sumary-description" }, overview),
        DetailsContainer({
          children: [
            Detail(
              { class: "detail-description" },
              new Date(release_date).getFullYear()
            ),
            ElipseStyled(),
            Detail({ class: "detail-description" }, genersResult),
            ElipseStyled(),
            Detail(
              { class: "detail-description" },
              `${(runtime / 60) >> 0}h${runtime % 60}m`
            ),
          ],
        }),
      ],
    });
  }
}

export default Description;
