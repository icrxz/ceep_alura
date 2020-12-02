import React, { Component } from "react";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import "./style.css";

class CardNota extends Component {
  delete() {
    const _index = this.props.index;

    this.props.deleteNote(_index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.note.title}</h3>
          <DeleteIcon onClick={this.delete.bind(this)} />
          <h4 className="card-nota_texto">{this.props.note.category}</h4>
        </header>

        <p className="card-nota_texto">{this.props.note.text}</p>
      </section>
    );
  }
}

export default CardNota;
