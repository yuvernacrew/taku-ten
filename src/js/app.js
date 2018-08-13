/**
 * @constructor
 */
export class App {
  constructor(val) {
    this.val = val;
  }
}

let m = new App('main');
if (process.env.NODE_ENV === 'development') {
  console.debug('main value:', m.val);
}

$(function(){


  // graphic
  function graphicAnimation(){
    new Vivus('graphic01', {
      type: 'delayed',
      duration: 80
    });

    new Vivus('graphic02', {
      type: 'delayed',
      duration: 80
    });
  }

  setTimeout(function(){
    $("#graphic01,#graphic02,#graphic03").fadeIn();
    graphicAnimation();
  },400);


  // art
  function artAnimation(){
    new Vivus('art01', {
      type: 'delayed',
      duration: 80
    });

    new Vivus('art02', {
      type: 'delayed',
      duration: 80
    });
  }

  setTimeout(function(){
    $("#art01,#art02,#art03").fadeIn();
    artAnimation();
  },800);


  // product
  function productAnimation(){
    new Vivus('product03', {
      type: 'delayed',
      duration: 80
    });

    new Vivus('product04', {
      type: 'delayed',
      duration: 80
    });
  }

  setTimeout(function(){
    $("#product01, #product02, #product03, #product04").fadeIn();
    productAnimation();
  },1100);

  // program
  function programAnimation(){
    new Vivus('program02', {
      type: 'delayed',
      duration: 80
    });

    new Vivus('program03', {
      type: 'delayed',
      duration: 80
    });
  }

  setTimeout(function(){
    $("#program01,#program02,#program03,#program04,#program05").fadeIn();
    programAnimation();
  },1400);

  // furniture

  function furnitureAnimation(){
    new Vivus('furniture01', {
      type: 'delayed',
      duration: 70
    });

    new Vivus('furniture02', {
      type: 'delayed',
      duration: 70
    });

    new Vivus('furniture03', {
      type: 'delayed',
      duration: 70
    }, animationEnd);

    new Vivus('furniture04', {
      type: 'delayed',
      duration: 70
    });
  }

  setTimeout(function(){
    $("#furniture01 ,#furniture02, #furniture03, #furniture04").fadeIn();
    furnitureAnimation();
  },1400);

  let $mvDetail = $('.mv-title, .mv-detail')
  function animationEnd(){
     $('.cls-2, .cls-11, .cls-12, .cls-13, .cls-14').css({opacity: '0.0'})
        .animate({opacity: '1'}, 400);

     $('.mv-logo').css({opacity: '0.0'})
        .animate({opacity: '1'}, 400);

    if($(window).width() > 768){
      $mvDetail.css({opacity: '0.0'}).animate({opacity: '1'}, 400);
    }

    if($(window).width() < 768){
      $('.sp-mv-title').css({opacity: '0.0'}).animate({opacity: '1'}, 400);
    }

    $('.cls-34').css({
      fill: '#9ed8f5',
      transition: "8.0s"
    });

    $('.cls-35, .cls-56, .cls-53').css({
      fill: '#fff',
      transition: "8.0s"
    });
    $('.cls-20, .cls-4, .cls-47').css({
      fill: '#2ca6e0',
      transition: "8.0s"
    });
    $('.cls-23, .cls-27').css({
      fill: '#f39800',
      transition: "8.0s"
    });
  }

  // slick

  $('.project-photo').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
