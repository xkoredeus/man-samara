$(function() {
  $('.banner__in').owlCarousel({
      nav: false,
      items: 1,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      dots: true,
      smartSpeed: 800,
      // navText: ["<svg width='24' height='18' viewBox='0 0 14 12' xmlns='http://www.w3.org/2000/svg'><path d='M13 6L1 6M1 6L5.8 11M1 6L5.8 1' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>", "<svg width='24' height='18' viewBox='0 0 14 12' xmlns='http://www.w3.org/2000/svg'><path d='M1 6L13 6M13 6L8.2 11M13 6L8.2 1' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>"],
  });
  $('[data-fancybox]').fancybox({
    animationDuration : 600,
    animationEffect   : 'slide-in-in',
    touch : false
  });
  $('.header__menu-btn').on('click', function() {
    $('.header__menu-sub').hide().removeClass('active');
    $(this).siblings('.header__menu-sub').slideToggle().addClass('active');
  });
  $(document).on('click', function (e) {
    var menuContainer = $('.header__menu-link-wrp');
    // if the target of the click isn't the container nor a descendant of the container
    if (!menuContainer.is(e.target) && menuContainer.has(e.target).length === 0) 
    {
        menuContainer.find('.header__menu-sub.active').slideToggle().removeClass('active')
    }
  });
});