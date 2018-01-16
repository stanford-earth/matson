(function (Drupal, $, window) {

  // Execute code once the window is fully loaded.
  $(window).bind('load', function () {
    $(".js-expandable-card__toggle").unbind('click').bind('click', function (e) { // expandable card
      // Must be attached to anchor element to prevent bubbling.
      e.preventDefault();
      var parent = $(this).parent(".js-expandable-card");

      $(parent).parent().parent().find(".js-expandable-card").not('.is-open').toggleClass('is-hidden');
      $(parent).toggleClass('is-open').removeClass('is-hidden');

      if ($(parent).hasClass('is-open')) {
        $(parent).find('.icon-items').attr('aria-expanded', true);
        // $('#close-' + $(parent).attr('id')).focus();
        // Highlight the first item in menu instead of the collapse item.
        $(parent).find('.icon-items a:first').first().focus();
      }
      else {
        $(parent).find('.icon-items').attr('aria-expanded', false);
        $('#open-' + $(parent).attr('id')).focus();
      }
      $(this).closest(".js-section-expandable-banner").toggleClass('has-overlay');
    });
  });

}(Drupal, jQuery, this));
