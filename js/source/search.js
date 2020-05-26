(function($) {
  if ($('#header #views-exposed-form-acquia-search-page #edit-search')) {
    $('#header #views-exposed-form-acquia-search-page #edit-search').focus(function(){
      document.getElementById("edit-search").value = '';
      $('#header #views-exposed-form-acquia-search-page').addClass('expanded');
      $("#header .navigation__main-menu .basic-main-menu").fadeOut(500);
    });

    $('#header #views-exposed-form-acquia-search-page #edit-search').focusout(function(){
      $('#header #views-exposed-form-acquia-search-page').removeClass('expanded');
      $("#header .navigation__main-menu .basic-main-menu").fadeIn(1000);
      // if(document.getElementById("edit-search").value.length >= 2)  {
        // $('#header #views-exposed-form-acquia-search-page').submit();
      // }
    });
  }
  
  $('#header #views-exposed-form-acquia-search-page #edit-submit-acquia-search').click(function(){
    console.log('header submit button was clicked');
    $('#header #views-exposed-form-acquia-search-page').submit();
  });

})(jQuery);