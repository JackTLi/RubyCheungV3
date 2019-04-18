
$(window).scroll( function(){
  if ($(window).scrollTop() > 120) {
    if (!$('#header').hasClass('background')) {
      $('#header').addClass('background');
    }
  }

  if ($(window).scrollTop() < 80) {
    if ($('#header').hasClass('background')) {
      $('#header').removeClass('background');
    }
  }
});
