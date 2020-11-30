import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";

import "./assets/App.css";
import "./assets/index.css";

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      notes: [],
    };
  }

  createNote(title, content) {
    console.log(`nova nota criada - ${title}: ${content}`);
    const newNote = {
      title,
      text: content,
    };
    const newNotesArray = [...this.state.notes, newNote]

    const newState = {
      notes: newNotesArray
    };

    this.setState(newState)
  }

  render() {
    return (
      <div className="conteudo">
        <FormularioCadastro createNote={this.createNote.bind(this)} />

        <ListaDeNotas notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
