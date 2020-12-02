import React from "react";

import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import FormularioCadastro from "./components/FormularioCadastro";
import NotesArray from "./data/notes";
import Categories from "./data/categories";

import "./assets/App.css";
import "./assets/index.css";

class App extends React.Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new NotesArray();
  }

  render() {
    return (
      <div className="conteudo">
        <FormularioCadastro
          createNote={this.notes.addNote.bind(this.notes)}
          categories={this.categories}
        />

        <main className="conteudo-principal">
          <ListaDeCategorias categories={this.categories} />

          <ListaDeNotas notes={this.notes} />
        </main>
      </div>
    );
  }
}

export default App;
