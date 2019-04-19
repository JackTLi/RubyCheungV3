$('document').ready(function(){
  $('#hamburger').click(function(e) {
    if ($('#hamburger').hasClass('open')) {
      $('#projects-menu').removeClass('open');
      $('#pages').removeClass('open');
      $('body').removeClass('no-scroll');
    }

    $('#pages').toggleClass('mobile-visible');
    $('#hamburger').toggleClass('open');
    e.preventDefault()
  });

  $('#projects').click(function(e) {
    $('#projects-menu').toggleClass('open');
    $('body').toggleClass('no-scroll');
    e.preventDefault()
  });

  $('.close-button').click(function(e) {
    $('#projects-menu').removeClass('open');
    $('#pages').removeClass('open');
    $('body').removeClass('no-scroll');
    e.preventDefault()
  });
});
