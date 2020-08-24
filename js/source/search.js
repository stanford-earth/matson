(function($) {
  if ($('#header #views-exposed-form-acquia-search-page input[data-drupal-selector="edit-search"]')) {
    $('#header #views-exposed-form-acquia-search-page input[data-drupal-selector="edit-search"]').focus(function(){
      document.getElementById('edit-search').value = '';
      // adding in backup if id is going to 2
      document.getElementById('edit-search--2').value = '';
      $('#header #views-exposed-form-acquia-search-page').addClass('expanded');
      $('#header .navigation__main-menu .basic-main-menu').fadeOut(500);
    });

    $('#header #views-exposed-form-acquia-search-page input[data-drupal-selector="edit-search"]').focusout(function(){
      $('#header #views-exposed-form-acquia-search-page').removeClass('expanded');
      $('#header .navigation__main-menu .basic-main-menu').fadeIn(1000);
		});
  }
  // if it is using search--2 id's
  // if ($('#header #views-exposed-form-acquia-search-page #edit-search--2')) {
  //   $('#header #views-exposed-form-acquia-search-page #edit-search').focus(function(){
  //     document.getElementById("edit-search").value = '';
  //     $('#header #views-exposed-form-acquia-search-page').addClass('expanded');
  //     $("#header .navigation__main-menu .basic-main-menu").fadeOut(500);
  //   });
  //
  //   $('#header #views-exposed-form-acquia-search-page #edit-search').focusout(function(){
  //     $('#header #views-exposed-form-acquia-search-page').removeClass('expanded');
  //     $("#header .navigation__main-menu .basic-main-menu").fadeIn(1000);
  //   });
  // }


  $('#header #views-exposed-form-acquia-search-page #edit-submit-acquia-search').click(function(){
    console.log('header submit button was clicked');
    $('#header #views-exposed-form-acquia-search-page').submit();
  });
  if ($('body').hasClass('page-search')) {
		$('.main-container input[data-drupal-selector="edit-search"]').attr('placeholder', 'Search Stanford Earth');
	}

})(jQuery);
