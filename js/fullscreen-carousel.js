$(function(){if(screen.width<992){galleryInitialization('initial');$('.gallery-thumbs .swiper-wrapper .swiper-slide[data-id="1"]').trigger('click');}})
$(window).resize(function(){if(screen.width<992){galleryInitialization();}})
function galleryInitialization(initial){galleryTopHeight(initial);if(screen.width>=992){$(window).resize(function(){galleryTopHeight(initial)})}
if(screen.width>=992){var spaceBetween=10;}else{var spaceBetween=0;}
var galleryTop=new Swiper('.gallery-top-box .gallery-top',{centeredSlides:true,slidesPerView:'auto',spaceBetween:spaceBetween,navigation:{nextEl:'.gallery-top-box .swiper-button-next',prevEl:'.gallery-top-box .swiper-button-prev',},scrollbar:{el:'.swiper-scrollbar',hide:false,draggable:true,dragSize:150,},onSlideChangeEnd:function(swiper,even){alert('äº‹ä»¶è§¦å‘äº†;');}});galleryTop.scrollbar.$el.css({"bottom":"0px","background":"none","height":"5px"});galleryTop.scrollbar.$dragEl.css({'background':'rgba(171,171,171,171.6)'});galleryTop.scrollbar.updateSize();var galleryThumbs=new Swiper('.gallery-thumbs-box .gallery-thumbs',{spaceBetween:8,slidesPerView:'auto',touchRatio:0.2,navigation:{nextEl:'.gallery-thumbs-box .swiper-button-next',prevEl:'.gallery-thumbs-box .swiper-button-prev',}});galleryTop.controller.control=galleryThumbs;var objThumbs=$(".gallery-thumbs .swiper-wrapper .swiper-slide");var objTop=$(".gallery-top .swiper-wrapper .swiper-slide");objThumbs.click(function(e){var currentId=$(this).attr("data-id");for(var i=0;i<objTop.length;i++){if($(objTop[i]).attr("data-id")===currentId){$(objTop[i-1]).addClass("swiper-slide-prev")
$(objTop[i-1]).siblings().removeClass("swiper-slide-prev")
$(objTop[i]).addClass("swiper-slide-active")
$(objTop[i]).siblings().removeClass("swiper-slide-active")
$(objTop[i+1]).addClass("swiper-slide-next")
$(objTop[i+1]).siblings().removeClass("swiper-slide-next")
e.preventDefault();galleryTop.slideTo(i,1000,currentThumbsShow());}}})
var targetElement=document.getElementById('galleryTopSwiperWrapper');var observer=new MutationObserver((mutationsList)=>{for(let mutation of mutationsList){if(mutation.type==='attributes'&&mutation.attributeName==='style'){currentThumbsShow()}}});var config={attributes:true};observer.observe(targetElement,config);}
function galleryTopHeight(initial){if(screen.width>=992){var wh=$('.fullscreen-carousel-section').height();var galleryThumbs_height=$(".gallery-thumbs").height()
var galleryTop_height=wh-galleryThumbs_height-22
$(".gallery-top").css("height",galleryTop_height)
var galleryTop_width=$('.fullscreen-carousel-section').width()-80
$(".gallery-top-box .swiper-container").css("width",galleryTop_width)}else{if(initial){var wh=$('.fullscreen-carousel-section').height();var galleryThumbs_height=$(".gallery-thumbs").height()
var galleryTop_height=wh-galleryThumbs_height-22
$(".gallery-top").css("height",galleryTop_height)}
var galleryTop_width=$('.fullscreen-carousel-section').width();$(".gallery-top-box .swiper-container").css("width",galleryTop_width)
$('.gallery-top .swiper-slide').css("width",galleryTop_width);}}
function currentThumbsShow(){var currentId=$('.gallery-top .swiper-slide.swiper-slide-active').attr("data-id");$('.gallery-thumbs .swiper-wrapper .swiper-slide[data-id="'+currentId+'"]').addClass('current').siblings().removeClass('current');}