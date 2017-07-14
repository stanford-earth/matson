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

          // Gather a bunch of measurements to create offset for sidebar
          var contentHeight = $('div.main-container').height();

          // This works a little differently if you're logged in because of the toolbar
          var topLimit, bonusHeight, authHeight, floating_sidebar__offset;
          if ($('body').hasClass('toolbar-fixed')) {
            topLimit = 100;
            authHeight = 0 ;
          } else {
            topLimit = 19;
            authHeight = 40;
          }
          // If there is a banner, then the sidebar floats below the banner.
          // If there isn't a banner, then the sidebar floats below the header.
          if (bannerHeight) {
            $('#floating_sidebar__wrapper').css({'top': bannerHeight + authHeight, 'height': contentHeight - bannerHeight + 120});
          } else {
            $('#floating_sidebar__wrapper').css({'height': contentHeight - bannerHeight});
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
