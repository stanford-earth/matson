(function ($, Drupal) {
  Drupal.behaviors.matson_sharrre = {
    attach: function (context, settings) {

      // Get the current url for twitter
      var newurl = document.location.href;
      // Strip paramaters
      newurl = newurl.replace(window.location.search, "");
      // Force protocol to http.
      newurl = newurl.replace(/.*?:\/\//g, "http://");

      $('.tweet-popup', context).sharrre({
        share: {
          twitter: true
        },
        urlCount: true,
        enableCounter: true,
        enableHover: false,
        enableTracking: true,
        buttons: {
          twitter: {
            via: 'StanfordEarth',
            url: '//opensharecount.com/count.json?url=' + newurl,
            count: true
          }
        },
        click: function(api, options) {
          api.simulateClick("tweet-popup");
          api.openPopup('twitter');
        }
      });

      $('.facebook-popup', context).sharrre({
        share: {
          facebook: true
        },
        url: newurl,
        enableHover: false,
        enableTracking: true,
        buttons: { facebook: {action: 'share', title: 'Share'}},
        click: function(api, options) {
          api.simulateClick('facebook-popup');
          api.openPopup('facebook');
        }
      });

      $('.linkedin-popup', context).sharrre({
        share: {
          linkedin: true
        },
        url: newurl,
        enableHover: false,
        enableTracking: true,
        buttons: { linkedin: {action: 'share', title: 'Share'}},
        click: function(api, options) {
          api.simulateClick('linkedin-popup');
          api.openPopup('linkedin');
        }
      });
    }
  };
})(jQuery, Drupal);
