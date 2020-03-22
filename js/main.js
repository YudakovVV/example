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
      minlength: 2,
      maxlength: 15
    },
    userPhone: {
      required: true,
      minlength: 10,
      phone: true
    },
    // правило-объект
    userEmail: {
      required: true,
      email: true
    }
  }, //сообщения
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя слишком длинное"
    },
    userPhone: {
      required: "Телефон обязателен",
      phone: "Введите в формате +7 (000) 000-00-00",
      minlength: "Не правильно введен телефон, введите в формате +7 (000) 000-00-00"
    },
    userEmail: {
      required: "Обязательно укажите Email",
      email: "Введите в формате name@domain.com"
    }
  }
});

$('.footer__form').validate({
  errorClass: "invalid",
  rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: {
      required: true,
      minlength: 10,
      phone: true
    },
    // правило-объект
    userQuestions: {
      required: true,
      questions: true
    }
  }, //сообщения
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя слишком длинное"
    },
    userPhone: {
      required: "Телефон обязателен",
      phone: "Введите в формате +7 (000) 000-00-00",
      minlength: "Не правильно введен телефон, введите в формате +7 (000) 000-00-00"
    },
    userQuestions: {
      required: "Обязательно укажите свой вопрос"
      
    }
  }
});

$('.control__form').validate({
  errorClass: "invalid",
  rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: {
      required: true,
      minlength: 10,
      phone: true
    }

  }, //сообщения
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя слишком длинное"
    },
    userPhone: {
      required: "Телефон обязателен",
      phone: "Введите в формате +7 (000) 000-00-00",
      minlength: "Не правильно введен телефон, введите в формате +7 (000) 000-00-00"
    }
  }
});

//маска для номера телефона

$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (__) ___-__-__"});

//Создание карты
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [53.098966, 49.967961],
          zoom: 9
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Тут творят чудеса',
          balloonContent: 'А это дом волшебника'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/3.jpg',
          // Размеры метки.
          iconImageSize: [32, 32],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      });
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects
      .add(myPlacemark);
      
});

});

