'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const openBtn = document.querySelectorAll('.show-modal');
const bodyBtn = document.querySelectorAll('body');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// new function is added . given a task to a keyboard to close our window
// const a = 'Jonas';
// first();
// function first() {
//   const b = 'Hello!';
//   second();
//   function second() {
//     const c = 'Hi!';
//     third();
//     function third() {
//       const d = 'Hey!';
//       console.log(d + c + b + a);
//     }
//   }
// }
