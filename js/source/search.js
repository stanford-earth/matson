window.onload = function() {
  (function ($) {
    if ($('#header #views-exposed-form-acquia-search-page input[data-drupal-selector="edit-search"]')) {
      $('#header #views-exposed-form-acquia-search-page input[data-drupal-selector="edit-search"]').focus(function () {
        if (document.getElementById('edit-search') !== null) {
          document.getElementById('edit-search').value = '';
        } else if (document.getElementById('edit-search--2' !== null)) {
          document.getElementById('edit-search--2').value = '';
        }
        $('#header #views-exposed-form-acquia-search-page').addClass('expanded');
        $('#header .navigation__main-menu .basic-main-menu').fadeOut(500);
      });
      $('#header #views-exposed-form-acquia-search-page input[data-drupal-selector="edit-search"]').focusout(function () {
        $('#header #views-exposed-form-acquia-search-page').removeClass('expanded');
        $('#header .navigation__main-menu .basic-main-menu').fadeIn(1000);
      });
    }
    $('#header #views-exposed-form-acquia-search-page #edit-submit-acquia-search').click(function () {
      $('#header #views-exposed-form-acquia-search-page').submit();
    });
    if ($('body').hasClass('page-search')) {
      $('.main-container input[data-drupal-selector="edit-search"]').attr('placeholder', 'Search Stanford Earth');
    }
  })(jQuery);
};
