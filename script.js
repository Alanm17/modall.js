'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const openBtn = document.querySelectorAll('.show-modal');
const bodyBtn = document.querySelectorAll('body');

const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  bodyBtn.classList.add('hidden');
};
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
