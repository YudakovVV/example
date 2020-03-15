/*
document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const escBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });  
  closeBtn.addEventListener('click', switchModal); 
  escBtn.addEventListener('keydown', function (event) {
  if(event.keyCode === 27) escBtn.getElementById('modal_id', switchModal).hidden= 1;
});

});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close'); 

    modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
///////////////кнопка прокрутки///////////////
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




})

