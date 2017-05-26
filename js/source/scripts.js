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

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

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
          var $this = $(this)

          if ($this.hasClass("is-active")) {
            $this.trigger("navbar:close")
          } else {
            $this.trigger("navbar:open")
          }
        });

        $(document).on('navbar:open', function(e) {
          var $navbar = $('.navbar');
          var $navbarButton = $('.navbar__button');

          $navbarButton.addClass("is-active");
          $navbarButton.next(".navbar__group").show();
          $navbar.css({'min-height':($(".hero-banner").height()+'px')});
          $navbar.addClass("is-expanded");
          $(".hero-banner__header").show();
          adjustMenu();
        })

        $(document).on('navbar:close', function(e) {
          var $navbar = $(".navbar")
          var $navbarButton = $('.navbar__button');

          $navbarButton.removeClass("is-active");
          $navbar.css({'min-height': '65'+'px'});
          $navbar.removeClass('is-expanded');
          console.log(e)
          if (!e.navbarExpanded) {
            $navbarButton.next(".navbar__group").hide();
          }
          $(".hero-banner__header").hide();
        })

        function addParents() {
          $(".basic-main-menu li a").each(function() {
            if ($(this).next().length > 0) {
              $(this).addClass("parent");
            }
          });
        }

        function adjustMenu(ww, toggleWidth) {
          if (ww < toggleWidth) {
            if (!$(".navbar__button").hasClass("is-active")) {
              $(".navbar__group").hide();
            } else {
              $(".navbar__group").show();
            }
            $(".basic-main-menu li").unbind('click');
            $(".basic-main-menu li a.parent").unbind('click').bind('click', function(e) {
              // must be attached to anchor element to prevent bubbling
              event.stopPropagation();
              e.preventDefault();
              $(this).parent("li").toggleClass('is-open').siblings("li").removeClass('is-open');
            });
          } 
          else if (ww >= toggleWidth) {
            $(".navbar__group").show();
            $(".basic-main-menu li").unbind('click');    
            $(".basic-main-menu li a.parent").unbind('click').bind('click', function(e) {
              // must be attached to anchor element to prevent bubbling
              event.stopPropagation();
              e.preventDefault();
              $(this).parent("li").toggleClass('is-open').siblings("li").removeClass('is-open');
            });

            $(document).click( function(){
              $('.basic-main-menu li').removeClass('is-open');
            });
          }
        }
      });

      $(window).resize(debounce(function () {
        // Execute code when the window is resized.
        var viewportWidth = $(window).width();
        if (viewportWidth > 768) {
          $(document).trigger({ type: "navbar:close", navbarExpanded: true })
        //   $(".navbar").removeClass("is-expanded");
        }
      }, 400));

      $(window).scroll(function () {
        // Execute code when the window scrolls.
      });

    }
  };

} (jQuery));
