"use strict";$(function(){var n={pageSlide:0,stopAllVideo3:function(){var e=$("#worldViewSwiper .swiper-slide video");$.each(e,function(e,i){i.paused||i.pause()})},stopAllVideo4:function(){var e=$("#classSwiper .swiper-slide video");$.each(e,function(e,i){i.paused||i.pause()})},playVideo3:function(){var e=$("#worldViewSwiper .swiper-slide-active video");e.length&&e[0].play&&e[0].play()},playVideo4:function(){var e=$("#classSwiper .swiper-slide-active video");e.length&&e[0].play&&e[0].play()}};({swiper:null,firstToVideo:!0,init:function(){window.__MOBILE||this.pcInit()},pcInit:function(){this.setViewportSwiperHeight(),this.initSwiper(),this.addResizeEvent(),this.addNavEvent(),this.goPageEvent()},setViewportSwiperHeight:function(){var e=$(window).height();$("#viewport-swiper").css({height:e})},initSwiper:function(){var e=this;this.swiper=new Swiper("#viewport-swiper",{speed:1e3,direction:"vertical",autoHeight:!0,mousewheel:!0,releaseOnEdges:!0,preventClicks:!1,loop:!1,touchStartPreventDefault:!0,touchMoveStopPropagation:!0,observer:!0,touchRatio:.5,allowTouchMove:!1,on:{slideChangeTransitionStart:function(){var t=this.activeIndex;$(".js-top-nav .nav-item").each(function(e){var i=$(this);i.removeClass("active"),i.data("id")===t&&i.addClass("active")}),1<t?($(".fix-app-links").show(),EventTrack["page"+(t+1)+"Event"]()):$(".fix-app-links").hide(),n.stopAllVideo3(),n.stopAllVideo4(),e.changeVideoMode()},slideChangeTransitionEnd:function(){6===this.activeIndex&&($(".js-copyright-toggle").removeClass("down"),$(".js-footer-main").show(500)),6===this.previousIndex&&($(".js-copyright-toggle").addClass("down"),$(".js-footer-main").hide(500))}}})},addResizeEvent:function(){var e=this;$(window).on("resize",debounce(function(){e.setViewportSwiperHeight()},200))},addNavEvent:function(){var t=this,n=$(".js-top-nav .nav-item");n.on("click",function(){var e=$(this),i=e.data("id");t.swiper.slideTo(i),n.removeClass("active"),e.addClass("active")})},goPageEvent:function(){var i=this;$(".js-goto-next-page").on("click",function(){var e=$(this).data("id");i.swiper.slideTo(e)})},changeVideoMode:function(){var e=$("#viewport-swiper .s-section");$.each(e,function(e,i){$(i).hasClass("swiper-slide-active")&&("w05"===(i=$(i).data("page"))?(n.playVideo3(),t.view.autoplay.start()):t.view.autoplay.stop(),"w03"===i?(n.playVideo4(),s.view.autoplay.start()):s.view.autoplay.stop(),n.pageSlide=i)})}}).init();var t={view:"",init:function(){var e=new Swiper("#worldViewSwiperThumb",{spaceBetween:0,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});this.view=new Swiper("#worldViewSwiper",{speed:600,loop:!0,observer:!0,resizeObserver:!0,observeParents:!0,centeredSlides:!0,initialSlide:0,slidesPerView:"auto",autoplay:{disableOnInteraction:!1,delay:6e3},thumbs:{swiper:e},on:{slideChangeTransitionStart:function(){n.stopAllVideo3()},slideChangeTransitionEnd:function(){"w05"===n.pageSlide&&setTimeout(function(){n.playVideo3()},1e3)},resize:function(){this.update()}}})}};t.init();var s={view:"",init:function(){var e=new Swiper("#classSwiperThumb",{spaceBetween:0,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0});this.view=new Swiper("#classSwiper",{loop:!0,slidesPerView:"auto",observer:!0,resizeObserver:!0,observeParents:!0,autoplay:{disableOnInteraction:!1,delay:23e3},thumbs:{swiper:e},on:{slideChangeTransitionStart:function(){n.stopAllVideo4()},slideChangeTransitionEnd:function(){"w03"===n.pageSlide&&setTimeout(function(){n.playVideo4()},1e3)},resize:function(){this.update()}}})}};s.init(),$(".js-lieutenant .lieutenant-image").hover(function(){$(".js-lieutenant .lieutenant-image").addClass("active"),$(this).removeClass("active")},function(){$(".js-lieutenant .lieutenant-image").removeClass("active")}),$(".js-lieutenant .lieutenant-image").on("click",function(){var e=$(this).find(".dia-slide");$(".js-lieutenant-dialog").show(),$(".js-lieutenant-dialog .js-dia-slide").html($(e).html())}),$(".js-lieutenant-dialog .js-close").on("click",function(){$(".js-lieutenant-dialog").hide()}),$(".js-top-download").on("click",function(){$(".js-download-dialog").show()}),$(".js-download-dialog .js-close").on("click",function(){$(".js-download-dialog").hide()}),$(".slide-skill-list .skill-item").hover(function(e){console.log(e);var i=$(this).find(".skill-name"),t=e.clientX,n=e.clientY;$("#classSkillTip").show().css({left:t-e.offsetX-110,top:n-e.offsetY+80}).text($(i).text())},function(e){$("#classSkillTip").text("").hide()}),new Swiper("#gameFeatureSwiper",{speed:600,loop:!0,effect:"coverflow",centeredSlides:!0,initialSlide:0,slidesPerView:"auto",delay:6e3,coverflowEffect:{rotate:0,stretch:100,depth:250,modifier:3,slideShadows:!1},pagination:{el:".swiper07-pagination"},navigation:{nextEl:".swiper07-button-next",prevEl:".swiper07-button-prev"}}),getNewsFn()});