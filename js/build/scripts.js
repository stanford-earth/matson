!function($){function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments,later=function(){timeout=null,immediate||func.apply(context,args)},callNow=immediate&&!timeout;clearTimeout(timeout),timeout=setTimeout(later,wait),callNow&&func.apply(context,args)}}Drupal.behaviors.basic={attach:function(context,settings){$(window).load(function(){function addParents(){$(".basic-main-menu li a").each(function(){$(this).next().length>0&&$(this).addClass("parent")})}function adjustMenu(ww,toggleWidth){$(".basic-main-menu li").unbind("click"),$(".basic-main-menu li a.parent").unbind("click").bind("click",function(e){event.stopPropagation(),e.preventDefault(),$(this).parent("li").toggleClass("js-is-open").siblings("li").removeClass("is-open")}),ww<toggleWidth?$(".navbar__button").hasClass("js-is-active")?$(".navbar__group").show():$(".navbar__group").hide():ww>=toggleWidth&&($(".navbar__group").show(),$(".basic-main-menu li").unbind("click"),$(document).click(function(){$(".basic-main-menu li").removeClass("js-is-open")}))}var ww=document.body.clientWidth,toggleWidth=768;addParents(),adjustMenu(ww,toggleWidth),$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth,adjustMenu(ww,768)}),$(".navbar__button").on("click",function(e){e.preventDefault();var $this=$(this);$this.hasClass("js-is-active")?$this.trigger("navbar:close"):$this.trigger("navbar:open")}),$(document).on("navbar:open",function(e){var $navbar=$(".navbar"),$navbarButton=$(".navbar__button");$navbarButton.addClass("js-is-active"),$navbarButton.next(".navbar__group").show(),$navbar.css({"min-height":$(".hero-banner").height()+"px"}),$navbar.addClass("is-expanded"),$(".hero-banner__header").hide(),adjustMenu()}),$(document).on("navbar:close",function(e){var $navbar=$(".navbar"),$navbarButton=$(".navbar__button");$navbarButton.removeClass("js-is-active"),$navbar.css({"min-height":"65px"}),$navbar.removeClass("is-expanded"),e.navbarExpanded||$navbarButton.next(".navbar__group").hide(),$(".hero-banner__header").show()})}),$(window).resize(debounce(function(){var vw=$(window).width();vw>768&&$(document).trigger({type:"navbar:close",navbarExpanded:!0})},400)),$(window).scroll(function(){})}}}(jQuery);
//# sourceMappingURL=scripts.js.map