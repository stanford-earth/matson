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

        console.log("OMG I'M LOADING A THING");

        if ( $(window).width() > 860 ) {
          // Check banner height.  If there is no banner, this returns null.
          var bannerHeight =  $('div.hero-banner').first().height();
          // Check if there's a sidebar (eg. Department pages)
          var classy = $('section').hasClass('with-floating_sidebar');

          // Check if there's both a sidebar and a banner.
          // If there is, then transform the header lockup, add some height, and
          // add the .with-banner class to body, so the css can apply more styling
          if (bannerHeight && classy) {
            $('#block-matson-branding').css({'height': bannerHeight});
            $('body').addClass('with-banner');
          }

          // Gather a bunch of measurements to create offset for sidebar
          var brandHeight = $('.brand-bar').height();
          var toolbarHeight = $('#toolbar-bar').height();
          var toolbarTopHeight = $('#toolbar-item-administration-tray').height();
          var headerHeight = $('#header').height();
          var contentHeight = $('div.main-container').height();
          var otherHeight = 26; // I don't know why this works
          var floating_sidebar__offset = brandHeight + toolbarHeight + toolbarTopHeight + bannerHeight + headerHeight + otherHeight;
          $('#floating_sidebar__wrapper').css({'top': floating_sidebar__offset, 'height': contentHeight - bannerHeight});

          // Add ScrollToFixed functionality to sidebar region
          var topLimit = $('body').hasClass('toolbar-fixed') ? 100 : 19;
          var bottomLimit = $('#footer__container').offset().top - $('#floating_sidebar').outerHeight(true);
          $('#floating_sidebar').scrollToFixed( {
            marginTop: topLimit,
            limit: bottomLimit,
            removeOffsets: true
          } );
        } else {
          // For true fluid responsiveness, if you resize the window from large
          // to small, then it should remove all the styling and stuff.
          $('body').removeClass('with-banner');
          $('#block-matson-branding').removeAttr( 'style' );
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
