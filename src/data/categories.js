export default class Categories {
  constructor() {
    this.categories = [];
    this._subscribers = [];
  }

  addCategory(newCategory) {
    this.categories.push(newCategory);
    this.notify();
  }

  //Observable pattern
  subscribe(func) {
    this._subscribers.push(func);
  }

  notify() {
    this._subscribers.forEach((sub) => {
      sub(this.categories);
    });
  }

  unsubscribe(func) {
    this._subscribers = this._subscribers.filter((f) => f !== func);
  }
}
