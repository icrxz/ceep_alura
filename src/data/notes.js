class Note {
  constructor(_title, _text, _category) {
    this.title = _title;
    this.text = _text;
    this.category = _category;
  }
}

export default class NotesArray {
  constructor() {
    this.notes = [];
    this._subscribers = [];
  }

  addNote(title, text, category) {
    const newNote = new Note(title, text, category);

    this.notes.push(newNote);
    this.notify();
  }

  deleteNote(index) {
    this.notes.splice(index, 1);
    this.notify();
  }

  //Observable pattern
  subscribe(func) {
    this._subscribers.push(func);
  }

  notify() {
    this._subscribers.forEach((sub) => {
      sub(this.notes);
    });
  }

  unsubscribe(func) {
    this._subscribers = this._subscribers.filter((f) => f !== func);
  }
}
