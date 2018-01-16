(function (Drupal, $, window) {

  // Execute code once the window is fully loaded.
  $(window).bind('load', function () {
    $(".js-collapsible-menu__toggle").unbind('click').bind('click', function(e) { // expandable card
      // Must be attached to anchor element to prevent bubbling.
      e.preventDefault();
      e.stopPropagation();
      $(this).parent(".js-collapsible-menu").toggleClass('is-open');
    });
  });

} (Drupal, jQuery, this));
