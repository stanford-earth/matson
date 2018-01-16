(function (Drupal, $, window) {

  // Execute code once the window is fully loaded.
  $(window).bind('load', function () {
    $(".js-expandable-container__toggle").unbind('click').bind('click', function(e) { // expandable card
      $(this).parent(".js-expandable-container").addClass('is-open');
      $(this).parent(".js-expandable-container").find(".film-card__link").eq(3).focus();
      // Must be attached to anchor element to prevent bubbling.
      e.preventDefault();
      e.stopPropagation();
    });
  });

} (Drupal, jQuery, this));
