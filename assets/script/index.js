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
const avatarURL = 'url(./assets/media/avatar.png)';

const newPostText = select('textarea');
const newPostImg = select('.post-img');
const newPostBtn = select('.post-btn');
const userAvatar = select('header .avatar')
const feed = select('.feed');
let imgData = '';


onEvent('click', newPostBtn, () => {
  if (isFormValid()) {
    createPost();
    clearForm();
  }
});

setAvatar();

function setAvatar() {
  userAvatar.style.backgroundImage = avatarURL;
}


function isFormValid() {
  return (newPostText.value.trim() !== '' || newPostImg.value !== '')
}

function clearForm() {
  newPostText.value = '';
  newPostImg.value = ''; 
}


function createPost() {
  const newPost = newPostTemplate();
  const postContent = createPostContent();
  newPost.append(postContent);

  addPostToFeed(newPost);

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

  posterAvatar.style.backgroundImage = avatarURL;
  postDate.innerText = currentDay.toDateString();
  poster.innerText = activeProfile.userName;

  postHeadStart.append(posterAvatar, poster);
  postHead.append(postHeadStart, postDate);
  newPost.append(postHead);

  return newPost
}

function createPostContent() {
  const postContent = document.createElement('div');
  const postText = document.createElement('p');
  const postImg = document.createElement('figure');

  postContent.classList.add('post-content');
  postText.innerText = newPostText.value.trim();
  getImgData(postImg);
  
  postContent.append(postText, postImg);

  return postContent
}

function addPostToFeed(newPost) {
  feed.prepend(newPost);
}


function getImgData(postImg) {
  const files = newPostImg.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      postImg.innerHTML = `<img src='${this.result}'>`;
    });    
  }
}


