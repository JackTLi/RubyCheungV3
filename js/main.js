
$(window).scroll( function(){
  if ($(window).scrollTop() > 120) {
    if (!$('.header-background').hasClass('scrolled')) {
      $('.header-background').addClass('scrolled');
    }
  }

  if ($(window).scrollTop() < 80) {
    if ($('.header-background').hasClass('scrolled')) {
      $('.header-background').removeClass('scrolled');
    }
  }
});
