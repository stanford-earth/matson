(function (Drupal, $, window) {

  var masonryPackery = function(){

    $('.masonry-blocks.maintain-order').masonry({
      // set itemSelector so .grid-sizer is not used in layout
      // columnWidth: '.is-column-width',
      // percentPosition: true
      itemSelector: '.masonry-block'
    });

    $('.masonry-blocks.reorder').packery({
      // options...
      itemSelector: '.masonry-block'
    });

  };

  // Execute code once the window is fully loaded & when ajax completes.
  $(window).bind('load', masonryPackery);
  $(document).ajaxComplete(function(){
    setTimeout(masonryPackery, 500);
  });

} (Drupal, jQuery, this));
