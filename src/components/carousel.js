import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Slide from "./carousel/slide.js";
import Wrapper from "./wrapper.js";

const SliderBulletList = styled.div`
  text-align: center;
  margin-block-start: 24px;
`;

const SliderBullet = styled.a`
  display: inline-block;
  inline-size: 15px;
  block-size: 15px;
  /* background: #424242; */
  border-radius: 50%;
  margin-right: 16px;
`;

class Carousel extends Component {
  state = {
    bullet: 1,
  };
  handleClick = (newBullet) => {
    this.setState({ bullet: newBullet });
  };
  render() {
    return new Wrapper({
      class: "wrapper-container",
      children: [
        createElement("scroll-container", {
          class: "slider-container",
          children: [
            new Slide({
              id: "slide-1",
              src: "../../images/mulan.png",
              title: "Mulan Movie",
            }),
            new Slide({
              id: "slide-2",
              src: "../../images/raya.png",
              title: "Raya",
            }),
            new Slide({
              id: "slide-3",
              src: "../../images/unidos.png",
              title: "Unidos",
            }),
          ],
        }),
        new SliderBulletList({
          children: [
            new SliderBullet({
              class: `slider-bullet ${
                this.state.bullet === 1 ? "selected" : ""
              }`,
              onClick: () => {
                this.setState({ bullet: 1 });
              },
              href: "#slide-1",
              checked: true,
            }),
            new SliderBullet({
              class: `slider-bullet ${
                this.state.bullet === 2 ? "selected" : ""
              }`,
              onClick: () => {
                this.setState({ bullet: 2 });
              },
              href: "#slide-2",
            }),
            new SliderBullet({
              class: `slider-bullet ${
                this.state.bullet === 3 ? "selected" : ""
              }`,
              onClick: () => {
                this.setState({ bullet: 3 });
              },
              href: "#slide-3",
            }),
          ],
        }),
      ],
    });
  }
}

export default Carousel;
