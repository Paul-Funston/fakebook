'use strict';
/*
    Object-oriented JavaScript
    Paul Funston

    Fakebook
*/

import { User } from './User.js';
import { Subscriber } from './Subscriber.js';
import { select, onEvent } from './util.js';

// profile
const id = 'RE2347';
const userName = 'PaulF21';
const email = 'paulfunston@email.com'
const pages = [];
const groups = [];
const canMonetize = true;

const paul = new Subscriber(id, 'Paul Funston', userName, email, pages, groups, canMonetize);


function validateForm() {
  // validate input when submit clicked
  // createPost();
  // clearForm();
}


function createPost() {

  //const newPost = newPostTemplate();
  //const postContent = createPostContent();

  // newPost.append(postContent);

  //  Do i want to save all posts in an array and have displayFeed add/create them or prepend to the feed.
  // feedArray.unshift(newPost);
  // displayFeed();
}

function newPostTemplate() {
  // const newPost =document.createElement('div'); 


  // return newPost
}

function createPostContent() {
  // const postContent = document.createElement('div');

  //return postContent
}

function displayFeed() {

}




