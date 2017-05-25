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
 (function ($) {


  // To understand behaviors, see https://www.drupal.org/node/2269515
  Drupal.behaviors.basic = {
    attach: function (context, settings) {

      // Execute code once the DOM is ready. $(document).ready() not required within Drupal.behaviors.
      $(window).load(function () {
        // Execute code once the window is fully loaded.

        var ww = document.body.clientWidth;
        var toggleWidth = 768;

        // Initial dropdown setup
        addParents();
        adjustMenu(ww, toggleWidth);

        $(window).bind('resize orientationchange', function() {
          ww = document.body.clientWidth;
          adjustMenu(ww, 768);
        });

        $(".navbar__button").on('click',function(e) {
          e.preventDefault();
          $(this).toggleClass("is-active");
          $(this).next(".navbar__group").toggle();
          $(".navbar").toggleClass("is-expanded");
          adjustMenu();
        });

        function addParents() {
          $(".basic-main-menu li a").each(function() {
            if ($(this).next().length > 0) {
              $(this).addClass("parent");
            }
          });
        }

        function adjustMenu(ww, toggleWidth) {

          console.log(ww, toggleWidth);

          if (ww < toggleWidth) {
            if (!$(".navbar__button").hasClass("is-active")) {
              $(".navbar__group").hide();
            } else {
              $(".navbar__group").show();
            }
            $(".basic-main-menu li").unbind('click');
            $(".basic-main-menu li a.parent").unbind('click').bind('click', function(e) {
              // must be attached to anchor element to prevent bubbling
              e.preventDefault();
              $(this).parent("li").toggleClass("is-open");
            });
          } 
          else if (ww >= toggleWidth) {
            $(".navbar__group").show();
            
            $(".basic-main-menu li").unbind('click');    
            $(".basic-main-menu li a.parent").unbind('click').bind('click', function(e) {
              // must be attached to anchor element to prevent bubbling
              e.preventDefault();
              $(this).parent("li").toggleClass('is-open').siblings("li").removeClass('is-open');
            });
          }
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

} (jQuery));
