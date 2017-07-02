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

  // To understand behaviors, see https://www.drupal.org/node/2269515
  Drupal.behaviors.basic = {
    attach: function (context, settings) {

      // Execute code once the DOM is ready. $(document).ready() not required within Drupal.behaviors.

      $(window).load(function () {
        // If it's a mobile device, don't do anything.
        if ( $(window).width() > 860 ) {
          // Check banner height.  If there is no banner, this returns null.
          var bannerHeight =  $('div.hero-banner').height();
          // Check if there's a sidebar (eg. Department pages)
          var classy = $('body').hasClass('with-sidebar');
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
          var otherHeight = bannerHeight ? -2 : 26; // I don't know why this works
          var sidebar__offset = brandHeight + toolbarHeight + toolbarTopHeight + bannerHeight + headerHeight + otherHeight;
          // console.log(bannerHeight, contentHeight, sidebar__offset, otherHeight);
          // $('#sidebar__wrapper').css({'top': '780px'});
          $('#sidebar__wrapper').css({'top': sidebar__offset, 'height': contentHeight - bannerHeight});


          // Add ScrollToFixed functionality to sidebar region
          var topLimit = $('body').hasClass('toolbar-fixed') ? 80 : 0;
          var bottomLimit = $('#footer__container').offset().top - $('#sidebar').outerHeight(true);
          // console.log(topLimit, bottomLimit);
          $("#sidebar").scrollToFixed( {
            marginTop: topLimit,
            limit: bottomLimit,
            removeOffsets: true
          } );

        }

      });

      $(window).resize(function () {
        // Execute code when the window is resized.
      });

      $(window).scroll(function () {
        // Execute code when the window scrolls.
      });

    }
  };

} (Drupal, jQuery, this));
