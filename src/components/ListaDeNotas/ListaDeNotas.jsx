import React from "react";
import CardNota from "../CardNota";

import "./style.css";

class ListaDeNotas extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };

    this._newNotes = this._newNotes.bind(this);
  }

  _newNotes(notes) {
    this.setState({ ...this.state, notes });
  }

  componentDidMount() {
    this.props.notes.subscribe(this._newNotes);
  }

  componentWillUnmount() {
    this.props.notes.unsubscribe(this._newNotes);
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notes.notes.map((note, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <CardNota
                note={note}
                index={index}
                deleteNote={this.props.notes.deleteNote.bind(this.props.notes)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
