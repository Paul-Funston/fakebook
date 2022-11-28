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

const activeProfile = new Subscriber(id, 'Paul Funston', userName, email, pages, groups, canMonetize);
const avatarURL = '';

const newPostText = select('textarea');
const newPostImg = select('.post-img');
const newPostBtn = select('.post-btn');
const feed = select('.feed');
console.log(newPostImg.files);


onEvent('click', newPostBtn, () => {
  if (validateForm()) {
    createPost();
    clearForm();
  }
  
});


function validateForm() {
  return (newPostText.value.trim() !== '' || newPostImg.files[0] !== undefined)

}

function clearForm() {
  newPostText.value = '';
  newPostImg.value = ''; 
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
  const newPost = document.createElement('div'); 
  const postHead = document.createElement('div');
  const postHeadStart = document.createElement('div');
  const posterAvatar = document.createElement('div');
  const poster = document.createElement('p');
  const postDate = document.createElement('p');
  const currentDay = new Date();

  newPost.classList.add('post');
  postHead.classList.add('post-head');
  postHeadStart.classList.add('post-head-start');
  posterAvatar.classList.add('avatar');
  postDate.innerText = currentDay.toDateString();
  poster.innerText = activeProfile.userName;

  postHeadStart.append(posterAvatar, poster);
  postHead.append(postHeadStart, postDate);
  newPost.append(postHead);



  return newPost
}

function createPostContent() {
  // const postContent = document.createElement('div');

  //return postContent
}

function displayFeed() {

}




