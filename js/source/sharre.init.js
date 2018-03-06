(function ($, Drupal) {
  Drupal.behaviors.matson_sharrre = {
    attach: function (context, settings) {

      $('.tweet-popup').sharrre({
        share: {
          twitter: true
        },
        urlCount: true,
        enableCounter: true,
        enableHover: false,
        enableTracking: true,
        buttons: { twitter: { via: 'StanfordEarth', url: '//opensharecount.com/count.json?url=' + document.location.href, count: true } },
        click: function(api, options) {
          api.simulateClick();
          api.openPopup('twitter');
        }
      });

      $('.facebook-popup').sharrre({
        share: {
          facebook: true
        },
        enableHover: false,
        enableTracking: true,
        buttons: { facebook: {action: 'share', title: 'Share'}},
        click: function(api, options) {
          api.simulateClick();
          api.openPopup('facebook');
        }
      });

      $('.linkedin-popup').sharrre({
        share: {
          linkedin: true
        },
        enableHover: false,
        enableTracking: true,
        buttons: { linkedin: {action: 'share', title: 'Share'}},
        click: function(api, options) {
          api.simulateClick();
          api.openPopup('linkedin');
        }
      });
    }
  };
})(jQuery, Drupal);
