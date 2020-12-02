import React from "react";
import { Component } from "react";

import "./style.css";

class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = "";
    this.content = "";
    this.category = "Sem Categoria";
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

  _handleTitleChange(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleContentChange(event) {
    event.stopPropagation();
    this.content = event.target.value;
  }

  _handleCategoryChange(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }

  _handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.createNote(this.titulo, this.content, this.category);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._handleSubmit.bind(this)}>
        <select
          className="form-cadastro_input"
          onChange={this._handleCategoryChange.bind(this)}
        >
          <option>Sem Categoria</option>

          {this.state.categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>

        <input
          className="form-cadastro_input"
          type="text"
          placeholder="Titulo"
          onChange={this._handleTitleChange.bind(this)}
        />

        <textarea
          className="form-cadastro_input"
          placeholder="Escreva sua nota..."
          rows={8}
          onChange={this._handleContentChange.bind(this)}
        />

        <button
          className="form-cadastro_input form-cadastro_submit"
          type="submit"
        >
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
