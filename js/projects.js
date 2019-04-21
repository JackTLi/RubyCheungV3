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

  function closeProjectsMenu() {
    $('#projects-menu').removeClass('open');
    $('#pages').removeClass('open');
    $('body').removeClass('no-scroll');
  }

  $('.close-button').click(function(e) {
    e.preventDefault()
  });

  $(document).click(function(event) {
    $target = $(event.target);
    if(!$target.closest('#projects-menu').length
      && !$target.closest('#projects').length
      && $('#projects-menu').hasClass('open')) {
      closeProjectsMenu();
    }
  });
});
