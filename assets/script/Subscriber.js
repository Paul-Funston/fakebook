'use strict';
/*
    Object-oriented JavaScript
    Paul Funston

    Subscriber class
*/
import {User} from './User.js';

class Subscriber extends User {
  #pages;
  #groups;
  #canMonetize;

  constructor(id, name, userName, email, pages, groups, canMonetize) {
    super(id, name, userName, email);
    this.#pages = pages;
    this.#groups = groups;
    this.#canMonetize = canMonetize;
  }

  get pages() {
    return this.#pages;
  }

  get groups() {
    return this.#groups;
  }

  get canMonetize() {
    return this.#canMonetize;
  }

  getInfo() {
    let array = super.getInfo();
     array.push(
      this.#pages,
      this.#groups,
      this.#canMonetize,
     )
     return array
  };
}

export{Subscriber};