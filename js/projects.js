
$('document').ready(function(){
  $('#projects').click(function(e) {
    $('#projects-menu').toggleClass('open');
    $('body').toggleClass('no-scroll');
    e.preventDefault()
  });

  $('.close-button').click(function(e) {
    $('#projects-menu').removeClass('open');
    $('body').removeClass('no-scroll');
    e.preventDefault()
  });
});
