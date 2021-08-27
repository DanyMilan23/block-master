import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Header from "./header.js";
// import Actions from "./actions.js";
// import Search from "./search.js";
// import Button from "./button.js";
// import Filters from "./filters.js";
import MovieList from "./movie-list.js";

const AppStyled = styled.div``;

class App extends Component {
  render() {
    return AppStyled({
      children: [
        new Header(),
        /* new Actions({
          children: [
            new Button({ id: "recommended" }, "Películas recomendadas"),
            new Filters(),
          ],
        }), */
        new MovieList(),
      ],
    });
  }
}

export default App;
{
  /* <section class="wrapper">
      <div class="actions">
        <form action="" id="search-form">
          <input
            placeholder="Escribe tu película favorita"
            name="title"
            type="Busca una pelicula"
          />
          <button>Buscar</button>
        </form>
        <button id="recommended">Películas recomendadas</button>
        <select name="" id="filter">
          <option value="all">Todas</option>
          <option value="most-valued">Más valoradas</option>
          <option value="least-valued">Menos valoradas</option>
        </select>
      </div>
    </section> */
}
