/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function (Drupal, $, window) {

  $(window).load(function () {

    var topLimit = $('body').hasClass('toolbar-fixed') ? 100 : 19;
    var bottomLimit = $('#footer__container').offset().top - $('#floating_sidebar').outerHeight(true);

    $('#floating_sidebar').scrollToFixed({
       marginTop: topLimit,
       limit: bottomLimit,
       removeOffsets: true
     });
  });

} (Drupal, jQuery, this));
