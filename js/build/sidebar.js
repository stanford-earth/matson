!function(Drupal,$,window){function mylifeforaiur(){if(console.log("OMG I'M LOADING A THING"),$(window).width()>860){var bannerHeight=$("div.hero-banner").first().height(),classy=$("section").hasClass("with-floating_sidebar");bannerHeight&&classy&&($("#block-matson-branding").css({height:bannerHeight}),$("body").addClass("with-banner"));var brandHeight=$(".brand-bar").height(),toolbarHeight=$("#toolbar-bar").height(),toolbarTopHeight=$("#toolbar-item-administration-tray").height(),headerHeight=$("#header").height(),contentHeight=$("div.main-container").height(),otherHeight=26,floating_sidebar__offset=brandHeight+toolbarHeight+toolbarTopHeight+bannerHeight+headerHeight+otherHeight;$("#floating_sidebar__wrapper").css({top:floating_sidebar__offset,height:contentHeight-bannerHeight});var topLimit=$("body").hasClass("toolbar-fixed")?100:19,bottomLimit=$("#footer__container").offset().top-$("#floating_sidebar").outerHeight(!0);$("#floating_sidebar").scrollToFixed({marginTop:topLimit,limit:bottomLimit,removeOffsets:!0})}else $("body").removeClass("with-banner"),$("#block-matson-branding").removeAttr("style"),$("#floating_sidebar__wrapper").removeAttr("style"),$("#floating_sidebar").trigger("detach.ScrollToFixed")}$(window).load(function(){mylifeforaiur()}),$(window).resize(function(){mylifeforaiur()}),$(window).scroll(function(){})}(Drupal,jQuery,this);
//# sourceMappingURL=sidebar.js.map