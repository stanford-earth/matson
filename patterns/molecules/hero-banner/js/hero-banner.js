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
 * @param  {[type]} event [description]
 */
function onPlayerReady(event) {
  // console.log(event);
}

/**
 * When a youtube video state has been changed.
 *
 * @param  {[type]} event
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
 * [matson_hero_banner_get_target_title description]
 * @param  {[type]} target [description]
 * @return {[type]}        [description]
 */
function matson_hero_banner_get_target_title(target) {
  return jQuery(target).parents(".hero-banner").find('.hero-banner__inner');
}

/**
 * [matson_hero_banner_hide_video_title description]
 * @param  {[type]} target [description]
 * @return {[type]}        [description]
 */
function matson_hero_banner_hide_video_title(target) {
  target.fadeOut(500);
}

/**
 * [matson_hero_banner_show_video_title description]
 * @param  {[type]} target [description]
 * @return {[type]}        [description]
 */
function matson_hero_banner_show_video_title(target) {
  target.fadeIn(500);
}
