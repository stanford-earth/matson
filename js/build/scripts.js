!function($){Drupal.behaviors.basic={attach:function(context,settings){$(window).load(function(){function addParents(){$(".basic-main-menu li a").each(function(){$(this).next().length>0&&$(this).addClass("parent")})}function adjustMenu(ww,toggleWidth){console.log(ww,toggleWidth),ww<toggleWidth?($(".navbar__button").css("display","inline-block"),$(".navbar__button").hasClass("active")?$(".navbar__group").show():$(".navbar__group").hide(),$(".basic-main-menu li").unbind("mouseenter mouseleave"),$(".basic-main-menu li a.parent").unbind("click").bind("click",function(e){e.preventDefault(),$(this).parent("li").toggleClass("hover")})):ww>=toggleWidth&&($(".navbar__group").css("display","none"),$(".navbar__group").show(),$(".basic-main-menu li").removeClass("hover"),$(".basic-main-menu li a").unbind("click"),$(".basic-main-menu li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){$(this).toggleClass("hover")}))}var ww=document.body.clientWidth,toggleWidth=768;addParents(),adjustMenu(ww,toggleWidth),$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth,adjustMenu(ww,768)}),$(".navbar__button").on("click",function(e){e.preventDefault(),$(this).toggleClass("active"),$(this).next(".navbar__group").toggle(),adjustMenu()})}),$(window).resize(function(){}),$(window).scroll(function(){})}}}(jQuery);
//# sourceMappingURL=scripts.js.map