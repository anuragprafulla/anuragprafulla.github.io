function scrollToElement (selector) {
    $('html, body').animate({
      scrollTop: $(selector).offset().top
    }, 1000);    
  };
  
  $(document).on('click', 'a.nav-item', function () {
    scrollToElement($(this).attr('href'));
  });