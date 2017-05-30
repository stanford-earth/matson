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

(function ($, Drupal) {

  // To understand behaviors, see https://www.drupal.org/node/2269515
  Drupal.behaviors.matson = {
    attach: function (context, settings) {
      $(window).scroll(function () {
        // Execute code when the window scrolls.
      });
    }
  };

  // Execute code once the DOM is ready.
  $(document).ready(function () {
    $(window).load(function () {
      // Execute code once the window is fully loaded.

      var ww = document.body.clientWidth;
      var toggleWidth = 768;

      // Initial dropdown setup.
      addParents();
      adjustMenu(ww, toggleWidth);

      $(window).bind('resize orientationchange', function() {
        ww = document.body.clientWidth;
        adjustMenu(ww, 768);
      });

      $(".js-nav-mobile-closable").on('click', function(e) {
        e.preventDefault();
        var $this = $(this)

        if ($this.hasClass('is-active')) {
          $this.trigger('navbar:close')
        }
        else {
          $this.trigger('navbar:open')
        }
      });

      $(document).on('navbar:open', function(e) {
        var $navbar = $(".js-nav-expandable");
        var $navbarButton = $(".js-nav-mobile-closable");

        $navbarButton.addClass('is-active');
        $navbarButton.next(".js-nav-group-viewable").show();
        $navbar.css({'min-height': ($(".hero-banner").height() + 'px')});
        $navbar.addClass('is-expanded');
        $(".hero-banner__header").hide();
        adjustMenu();
      })

      $(document).on('navbar:close', function(e) {
        var $navbar = $(".js-nav-expandable")
        var $navbarButton = $(".js-nav-mobile-closable");

        $navbarButton.removeClass('is-active');
        $navbar.css({'min-height': '65px'});
        $navbar.removeClass('is-expanded');
        if (!e.navbarExpanded) {
          $navbarButton.next(".js-nav-group-viewable").hide();
        }
        $(".hero-banner__header").show();
      })

      function addParents() {
        $(".js-nav-item-expandable li a").each(function() { // basic-main-menu.
          if ($(this).next().length > 0) {
            $(this).addClass('parent');
          }
        });
      }

      function adjustMenu(ww, toggleWidth) {
        $(".js-nav-item-expandable li").unbind('click'); // basic-main-menu
        $(".js-nav-item-expandable li a.parent").unbind('click').bind('click', function(e) { // basic-main-menu.
          // Must be attached to anchor element to prevent bubbling.
          event.stopPropagation();
          e.preventDefault();
          $(this).parent("li").toggleClass('is-open').siblings("li").removeClass('is-open');
        });

        if (ww < toggleWidth) {
          if (!$(".js-nav-mobile-closable").hasClass('is-active')) {
            $(".js-nav-group-viewable").hide();
          }
          else {
            $(".js-nav-group-viewable").show();
          }
        }
        else if (ww >= toggleWidth) {
          $(".js-nav-group-viewable").show();
          $(".js-nav-item-expandable li").unbind('click'); // basic-main-menu.

          $(document).click(function() {
            $(".js-nav-item-expandable li").removeClass('is-open'); // basic-main-menu.
          });
        }
      }
    });

    $(window).resize(Drupal.debounce(function () {
      // Execute code when the window is resized.
      var vw = $(window).width();
      if (vw > 768) {
        $(document).trigger({ type: 'navbar:close', navbarExpanded: true })
      }
    }, 400));
  });
} (jQuery, Drupal));
