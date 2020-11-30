import React from "react";
import { Component } from "react";

import './style.css';

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.content = "";
  }

  _handleTitleChange(event) {
    this.titulo = event.target.value;
  };

  _handleContentChange(event) {
    this.content = event.target.value;
  };

  _handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.createNote(this.titulo, this.content);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._handleSubmit.bind(this)}>
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
