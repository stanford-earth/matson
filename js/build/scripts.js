!function(Drupal,$,window){$(window).bind("load",function(){function adjustMenu(ww,toggleWidth){$(".js-nav-item-expandable li").unbind("click"),$(".js-nav-item-expandable li a.parent").unbind("click").bind("click",function(e){e.preventDefault(),e.stopPropagation(),$(this).parent("li").toggleClass("is-open").siblings("li").removeClass("is-open")}),ww<toggleWidth?$(".js-nav-mobile-closable").hasClass("is-active")?$(".js-nav-group-viewable").show():$(".js-nav-group-viewable").hide():ww>=toggleWidth&&($(".js-nav-group-viewable").show(),$(".js-nav-item-expandable li").unbind("click"),$(document).click(function(){$(".js-nav-item-expandable li").removeClass("is-open")}))}var ww=document.body.clientWidth;$(".js-nav-item-expandable li a").each(function(){$(this).next().length>0&&$(this).addClass("parent")}),adjustMenu(ww,860),$(window).bind("resize orientationchange",function(){adjustMenu(ww=document.body.clientWidth,860)}),$(".js-nav-mobile-closable").on("click",function(e){e.preventDefault();var $this=$(this);$this.hasClass("is-active")?$this.trigger("navbar:close"):$this.trigger("navbar:open")}),$(document).on("navbar:open",function(e){var $navbar=$(".js-nav-expandable"),$navbarButton=$(".js-nav-mobile-closable");$navbarButton.addClass("is-active"),$navbarButton.next(".js-nav-group-viewable").show(),$navbar.css({"min-height":$(".hero-banner").height()+"px"}),$navbar.addClass("is-expanded"),$(".hero-banner__header").hide(),adjustMenu()}),$(document).on("navbar:close",function(e){var $navbar=$(".js-nav-expandable"),$navbarButton=$(".js-nav-mobile-closable");$navbarButton.removeClass("is-active"),$navbar.css({"min-height":"65px"}),$navbar.removeClass("is-expanded"),e.navbarExpanded||$navbarButton.next(".js-nav-group-viewable").hide(),$(".hero-banner__header").show()})}),$(window).resize(Drupal.debounce(function(){$(window).width()>860&&$(document).trigger({type:"navbar:close",navbarExpanded:!0})},400))}(Drupal,jQuery,this);
//# sourceMappingURL=scripts.js.map