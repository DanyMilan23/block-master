import { Component, createElement } from "../../lib/react/index.js";
import ButtonA from "./buttonA.js";
import ButtonB from "./buttonB.js";

class SlideButtons extends Component {
  render() {
    return createElement("div", {
      class: "button-container",
      children: [new ButtonA(), new ButtonB()],
    });
  }
}

export default SlideButtons;
