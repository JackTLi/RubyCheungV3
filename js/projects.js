
$('document').ready(function(){
  $('#projects').click(function(e) {
    $('#projects-menu').toggleClass('open');
    e.preventDefault()
  });

  $('.close-button').click(function(e) {
    $('#projects-menu').removeClass('open');
    e.preventDefault()
  });
});
