import React from "react";
import CardNota from "../CardNota";

import "./style.css";

class ListaDeNotas extends React.Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notes.map((note, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <CardNota info={note} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
