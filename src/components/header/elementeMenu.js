import { Component, createElement } from "../../lib/react/index.js";
import styled from "../../lib/styled-components.js";
import store from "../../store.js";
import { SET_FILTER } from "../../actions/index.js";

class ElementeMenu extends Component {
  state = { filter: null };
  handleClick = (event) => {
    store.dispatch({
      type: SET_FILTER,
      payload: this.props.value,
    });
    this.props.change(this.props.value);
  };

  async componentDidMount() {
    const filterState = store.getState();
  }

  render() {
    const stateFilter = store.getState();
    const className = `item-menu ${
      stateFilter.filter == this.props.value ? "selected" : ""
    }`;

    return createElement("li", {
      class: className,
      onClick: this.handleClick,
      value: this.props.value,
      children: createElement(
        "a",
        {
          value: this.props.value,
        },
        this.props.name
      ),
    });
  }
}

export default ElementeMenu;
