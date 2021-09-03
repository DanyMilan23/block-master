import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Modal from "./modal.js";
import store from "../store.js";
import { SHOW_MODAL } from "../actions/index.js";

class Movie extends Component {
  state = {
    portal: false,
  };

  handleClick = () => {
    store.dispatch({
      type: SHOW_MODAL,
      payload: {
        modal: true,
        modalData: this.props,
      },
    });
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setState();
    });
  }

  render() {
    const { poster_path, title, id, vote_average } = this.props;
    return createElement("article", {
      onClick: this.handleClick,
      class: `movie ${vote_average >= 7 ? "recommended" : ""}`,
      children: [
        createElement("img", {
          class: "movie-poster",
          src: `//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`,
          alt: "",
        }),
        createElement("span", {
          class: "movie-rate",
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
    });
  }
}

export default Movie;
