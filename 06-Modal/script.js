'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// console.log(btnShowModal); // it will shows click button index/array
//open popup
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
//close popup
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
//loop for multiple popup with same class property
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}
//close popup using keyboard key
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // above code insted of this line => if (!modal.classList.contains('hidden')) {}
    closeModal();
  }
});
