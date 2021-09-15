import { Component, createElement } from "../../lib/react/index.js";
import styled from "../../lib/styled-components.js";
import Form from "./search/form.js";
import Input from "./search/input.js";
import Button from "./search/button.js";
import store from "../../store.js";
import { SEARCH_MOVIE, SET_FILTER } from "../../actions/index.js";

class Search extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const query = formData.get("title");
    if (query) {
      store.dispatch({
        type: SEARCH_MOVIE,
        payload: query,
      });
      this.props.close();
      return;
    }
    store.dispatch({
      type: SET_FILTER,
      payload: "all",
    });
    this.props.close();
    return;
  };
  componentDidMount() {
    store.subscribe(() => {
      this.setState();
    });
  }
  render() {
    return Form({
      onSubmit: this.handleSubmit,
      class: "search-form modal",
      children: [
        new Input({
          placeholder: "Busca tu película favorita",
          name: "title",
          type: "text",
          class: "input-search",
        }),
        Button({
          class: "button-search",
          children: createElement("img", {
            src: "images/searchIcon.png",
            height: "20px",
            width: "20px",
            type: "submit",
          }),
        }),
      ],
    });
  }
}

export default Search;
