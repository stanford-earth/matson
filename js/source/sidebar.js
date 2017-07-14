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

      function mylifeforaiur () {
        // If you're using the "aiur" layout from stanford_layouts, then you get
        // a floating sidebar.
        // Only do this if you're not on a mobile device.

        if ( $(window).width() > 860 ) {
          // Check banner height.  If there is no banner, this returns null.
          var bannerHeight =  $('div.hero-banner').first().height();

          // This works a little differently if you're logged in because of the toolbar
          var topLimit = $('body').hasClass('toolbar-fixed') ? 100 : 19;

          // If there is a banner, then the sidebar floats below the banner.
          // If there isn't a banner, then the sidebar floats below the header.
          if (bannerHeight) {
            $('#floating_sidebar__wrapper').css({'top': bannerHeight, 'bottom': 0});
          } else {
            $('#floating_sidebar__wrapper').css({'top': 0, 'bottom': 0});
          }

          // Add ScrollToFixed functionality to sidebar region
          var bottomLimit = $('#footer__container').offset().top - $('#floating_sidebar').outerHeight(true);
          $('#floating_sidebar').scrollToFixed( {
            marginTop: topLimit,
            limit: bottomLimit,
            removeOffsets: true
          } );
        } else {
          // For true fluid responsiveness, if you resize the window from large
          // to small, then it should remove all the styling and stuff.
          $('#floating_sidebar__wrapper').removeAttr( 'style' );
          $('#floating_sidebar').trigger('detach.ScrollToFixed');
        }

      }

      // Execute code once the DOM is ready. $(document).ready() not required within Drupal.behaviors.

      $(window).load(function () {
        mylifeforaiur();
      });

      $(window).resize(function () {
        // Execute code when the window is resized.
        mylifeforaiur();
      });

      $(window).scroll(function () {
        // Execute code when the window scrolls.
      });

} (Drupal, jQuery, this));
