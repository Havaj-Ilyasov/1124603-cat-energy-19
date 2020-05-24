var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
// var slide = document.querySelector(".slide");

// window.onmousemove = function (e) {
//   var x = e.clientX;
//   slide.style.left = x + "px";
// }

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.938631, 30.323055],
      zoom: 17,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Интернет-магазина "Кэт-энерджи"',
      balloonContent: 'г. Санкт-Петербург, ул. Большая Конюшеная, д. 19.8, офис 101'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/map-pin.png',
      // Размеры метки.
      iconImageSize: [55, 53]
    });


  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects
    .add(myPlacemark);
});
