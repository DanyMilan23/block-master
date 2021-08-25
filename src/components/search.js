import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Form from "./form.js";
import Input from "./input.js";
import Button from "./button.js";

class Search extends Component {
  render() {
    return Form({
      action: "",
      id: "search-form",
      children: [
        new Input({
          placeholder: "Escribe tu película favorita",
          name: "title",
          type: "text",
        }),
        Button(null, "Buscar"),
      ],
    });
  }
}

export default Search;
