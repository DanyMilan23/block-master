import { Component, createElement } from "../../lib/react/index.js";

class Slide extends Component {
  render() {
    return createElement("scroll-page", {
      class: "slider-slide",
      id: this.props.id,
      children: createElement("iframe", {
        class: "video",
        /*       width: "1200",*/
        height: "310",
        src: this.props.src,
        title: this.props.title,
        frameborder: "0",
      }),
    });
  }
}

export default Slide;
