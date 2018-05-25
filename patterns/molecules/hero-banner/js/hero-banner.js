//
// Youtube iframe events api handling.
//
(function (Drupal, $, window) {

  Drupal.behaviors.matson_hero_banner = {
    attach: function (context, settings) {
      var tag = document.createElement('script');
      tag.id = 'youtube-iframe-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }

} (Drupal, jQuery, this));

// Set up the youtube event callbacks by starting with variable storage.
var player;

/**
 * YouTube iframe event api ready callback.
 *
 * @return {[type]} [description]
 */
function onYouTubeIframeAPIReady() {
  jQuery(".hero-banner").each(function(i, v) {
    var videoId = jQuery(v).attr('id') + "-iframe";
    jQuery(v).find('iframe').attr("id", videoId);

    player = new YT.Player(videoId, {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  });
}

/**
 * When the youtube players are ready to be acted on.
 *
 * @param  object event
 *  Object from youtube api with event information.
 */
function onPlayerReady(event) {
  // console.log(event);
}

/**
 * When a youtube video state has been changed.
 *
 * @param object event
 * event.data
 *   -1 unstarted
 *    0 ended
 *    1 playing
 *    2 paused
 *    3 buffering
 *    5 video cued
 */
function onPlayerStateChange(event) {
  var status = event.data;
  var target = event.target.a;
  var target_title = matson_hero_banner_get_target_title(target);

  // If the video is playing hide the title.
  if (status == 1) {
    matson_hero_banner_hide_video_title(target_title);
  }

  // If the video has ended or is paused show the title.
  if (status == 0 || status == 2) {
    matson_hero_banner_show_video_title(target_title);
  }
}

/**
 * Matson_hero_banner_get_target_title.
 *
 * @param object target
 *   DOM Object to act upon.
 *
 * @return Object
 *   Jquery object containing the hero-banner__inner text container.
 */
function matson_hero_banner_get_target_title(target) {
  return jQuery(target).parents(".hero-banner").find('.hero-banner__inner');
}

/**
 * Matson_hero_banner_hide_video_title.
 *
 * @param object target
 *   Jquery object to run function on.
 */
function matson_hero_banner_hide_video_title(target) {
  if (window.innerWidth > 767) {
    target.fadeOut(500);
  }
}

/**
 * Matson_hero_banner_show_video_title.
 *
 * @param object target
 *   Jquery object to run function on.
 */
function matson_hero_banner_show_video_title(target) {
  target.fadeIn(500);
}
