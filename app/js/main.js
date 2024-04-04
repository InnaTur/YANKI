$(function () {

  $('.burger-menu').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.submenu').css('display', 'flex');
    } else {
      $('.submenu').css('display', 'none');
    }
  });
  

  $('.slider').slick({
    slidesToShow: 4, 
    slidesToScroll: 1,
    variableWidth: true,
  });


  function moveElements() {
    if (window.matchMedia('(max-width: 1190px)').matches) {
        $('.menu__list').appendTo('.submenu');
    } else {
        $('.menu__list').appendTo('.menu');
    }
    
    if (window.matchMedia('(max-width: 870px)').matches) {
        $('.search').appendTo('.submenu');
    } else {
        $('.search').appendTo('.header__top-inner');
    }

    if (window.matchMedia('(max-width: 500px)').matches) {
      $('.account').appendTo('.menu__list');
    } else {
      $('.account').appendTo('.icons');
    }
  }

  moveElements(); 

  $(window).resize(function(){
    moveElements(); 
  });


  $('.footer__box-title').click(function(){
    let otherContents = $('.footer__box-title.active').not($(this)).next('.footer__box-list, .our-contact');
    otherContents.slideUp();
    $('.footer__box-title.active').not($(this)).removeClass('active');

    let content = $(this).next('.footer__box-list, .our-contact');
    $(this).toggleClass('active');
    if (content.css('display') === 'none') {
      content.slideDown();
    } else {
      content.slideUp();
    }
  });


  $(".filter-box__btn").click(function() {
    var filterBox = $(this).closest(".filter-box");
    var img = filterBox.find("img");
  
    if (filterBox.hasClass("open")) {
      img.css("transform", "rotate(90deg)");
    } else {
      img.css("transform", "rotate(270deg)");
    }
  
    filterBox.find(".filter-box__form").slideToggle("slow");
  
    filterBox.toggleClass("open");
  });

  $('.sidebar__btn').click(function() {
    $(this).toggleClass('active');
    
    $('img', this).toggleClass('rotate');
    
    $('.sidebar__list').slideToggle(500);
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          draggable: true,
          arrows: true
        },
        breakpoint: 740,
        settings: {
          arrows: false,
          draggable: true
        }
      }
    ]
  });

  $('.product-content__descr-title').click(function(){
    let otherContents = $('.product-content__descr-title.active').not($(this)).next('.product-content__descr-inner');
    otherContents.slideUp();
    $('.product-content__descr-title.active').not($(this)).removeClass('active');

    let content = $(this).next('.product-content__descr-inner');
    $(this).toggleClass('active');
    if (content.css('display') === 'none') {
      content.slideDown();
    } else {
      content.slideUp();
    }
  });

})