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

  // Execute code once the window is fully loaded.
  $(window).load(function () {
    var ww = document.body.clientWidth;
    var toggleWidth = 860;

    // Initial dropdown setup.
    addParents();
    adjustMenu(ww, toggleWidth);

    $(window).bind('resize orientationchange', function() {
      ww = document.body.clientWidth;
      adjustMenu(ww, 860);
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
      // basic-main-menu.
      $(".js-nav-item-expandable li").unbind('click');
      // basic-main-menu.
      $(".js-nav-item-expandable li a.parent").unbind('click').bind('click', function ( ) {
        // Must be attached to anchor element to prevent bubbling.
        e.preventDefault();
        e.stopPropagation();
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

        $(document).click(function () {
          // basic-main-menu.
          $(".js-nav-item-expandable li").removeClass('is-open');
        });
      }
    }

    // Js to turn Drupal messages into a toastr popup.
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-full-width",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "0",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };

    // Hide the non-js message region.
    $('div.messages').hide();

    // Everybody do the toastr!
    $('div.messages').each(function () {
      var message = $(this).html();
      var type = $(this).attr('role');
      switch (type) {
        case 'Status message':
          toastr.success(message);
          break;

        case 'Warning message':
          toastr.warning(message);
          break;

        case 'Error message':
          toastr.error(message);
          break;

        default:
          // Leave this in as a catch-all.
          toastr.info("Sorry, something went wrong, I'm just not sure what");
          break;
      }
    })

  });

  $(window).resize(Drupal.debounce(function () {
    // Execute code when the window is resized.
    var vw = $(window).width();
    if (vw > 860) {
      $(document).trigger({ type: 'navbar:close', navbarExpanded: true })
    }
  }, 400));

} (Drupal, jQuery, this));
