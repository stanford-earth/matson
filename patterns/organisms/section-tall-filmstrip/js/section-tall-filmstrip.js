(function (Drupal, $, window) {

  // Execute code once the window is fully loaded.
  $(window).bind('load', function () {
    $(".js-expandable-container__toggle").unbind('click').bind('click', function(e) { // expandable card
      $(this).parent(".js-expandable-container").addClass('is-open');
      $(this).parent(".js-expandable-container")
        .parent()
        .find(".aria-alert")
        .toggleClass('hidden')
        .attr("role", "alert")
        .fadeOut(100);

        $(this).parent(".js-expandable-container")
          .parent()
          .find(".aria-alert")
          .promise()
          .done(function() {
            $(this).parents(".js-expandable-container")
              .find(".film-card__link")
              .eq(4)
              .focus()
              .attr("role", "alert");
          });

      // Must be attached to anchor element to prevent bubbling.
      e.preventDefault();
      e.stopPropagation();
    });
  });

} (Drupal, jQuery, this));
