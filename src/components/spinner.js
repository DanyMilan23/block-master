import { Component, createElement } from "../lib/react/index.js";

class Spinner extends Component {
  render() {
    return createElement("div", {
      class: "spinner",
    });
  }
}

export default Spinner;
