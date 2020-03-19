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

//initialize swiper when document ready
var mySwiper = new Swiper ('.swiper-container', {    
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
var next = $('.swiper-button-next');
var prev = $('.swiper-button-prev');
var bullets = $('.swiper-pagination');

next.css('left', prev.width() + 10 + bullets.width() + 10)
bullets.css('left', prev.width() + 10)

new WOW().init();

//Валидация формы
$('.modal__form').validate({
  errorClass: "invalid",
  rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2
    },
    userPhone: "required",
    // правило-объект
    userEmail: {
      required: true,
      email: true
    }
  }, //сообщения
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв"
    },
    userPhone: "Телефон обязателен",
    userEmail: {
      required: "Обязательно укажите Email",
      email: "Введите в формате name@domain.com"
    }
  }
});

//маска для номера телефона

$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (__) ___-__-__"});

})

