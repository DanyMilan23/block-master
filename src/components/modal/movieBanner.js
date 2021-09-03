import { Component, createElement } from "../../lib/react/index.js";
import styled from "../../lib/styled-components.js";
import store from "../../store.js";

const ContainerBanner = styled.div`
  /* max-width: 282.45px; */
  /* width: 100%; */
  /* border: 1px solid red; */
`;

class MovieBanner extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState();
    });
  }
  render() {
    const { poster_path, vote_average } = this.props;
    console.log(poster_path);
    console.log(vote_average);
    return ContainerBanner({
      children: createElement("article", {
        class: `movie-modal ${vote_average >= 7 ? "recommended" : ""}`,
        children: [
          createElement("img", {
            class: "movie-modal-poster",
            src: `//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`,
            alt: "",
          }),
          createElement("span", {
            class: "movie-modal-rate",
            children: [
              createElement("img", {
                src: "../../images/starIcon.png",
              }),
              createElement(
                "p",
                {
                  class: "rate",
                },
                vote_average
              ),
            ],
          }),
        ],
      }),
    });
  }
}

export default MovieBanner;
