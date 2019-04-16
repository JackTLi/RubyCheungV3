
$(window).scroll( function(){
  if ($(window).scrollTop() > 300) {
    if (!$('#header').hasClass('background')) {
      $('#header').addClass('background');
    }
  }

  if ($(window).scrollTop() < 200) {
    if ($('#header').hasClass('background')) {
      $('#header').removeClass('background');
    }
  }
});
