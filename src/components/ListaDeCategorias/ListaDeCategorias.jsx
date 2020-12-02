import React, { Component } from "react";

import "./style.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };

    this._newCategories = this._newCategories.bind(this);
  }

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  componentDidMount() {
    this.props.categories.subscribe(this._newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._newCategories);
  }

  _handlerKeyInput(e) {
    if (e.key === "Enter") {
      this.props.categories.addCategory(e.target.value);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categories.map((element, index) => (
            <li className="lista-categorias_item" key={index}>
              {element}
            </li>
          ))}
        </ul>

        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar categoria"
          onKeyUp={this._handlerKeyInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
