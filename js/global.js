jQuery(function($){"use strict";var _functions={};$(function(){"use strict";var swipers=[],winW,winH,headerH,winScr,footerTop,_isresponsive,_ismobile=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i);var isIE11=!!window.MSInputMethodContext&&!!document.documentMode;_functions.pageCalculations=function(){winW=$(window).width();winH=$(window).height();};if(_ismobile){$('body').addClass('mobile');_functions.pageCalculations();}
if($('.wow').length&&!_ismobile){var wow=new WOW().init();}
setTimeout(function(){_functions.initSwiper();$('body').addClass('loaded');},1500);$(window).load(function(){$('#loader-wrapper').fadeOut();if($('.isotope-filter').length){var initValue=$('.isotope-nav').find('.selected a').attr('data-filter');$('.isotope-content').isotope({itemSelector:'.isotope-item',filter:initValue,masonry:{gutter:0,columnWidth:'.grid-sizer'}});}});_functions.resizeCall=function(){_functions.pageCalculations();};if(!_ismobile){$(window).resize(function(){_functions.resizeCall();});}else{window.addEventListener("orientationchange",function(){_functions.resizeCall();},false);}
$(window).on("scroll",function(){winScr=$(window).scrollTop();if(winScr>200){$("header").addClass("mobile");}else{$("header").removeClass("mobile");}});var initIterator=0;_functions.initSwiper=function(){$('.swiper-container').not('.initialized').each(function(){var $t=$(this);var index='swiper-unique-id-'+ initIterator;$t.addClass('swiper-'+ index+' initialized').attr('id',index);$t.find('.swiper-pagination').addClass('swiper-pagination-'+ index);$t.find('.swiper-button-prev').addClass('swiper-button-prev-'+ index);$t.find('.swiper-button-next').addClass('swiper-button-next-'+ index);var slidesPerViewVar=($t.data('slides-per-view'))?$t.data('slides-per-view'):1;if(slidesPerViewVar!='auto')slidesPerViewVar=parseInt(slidesPerViewVar,10);swipers['swiper-'+ index]=new Swiper('.swiper-'+ index,{pagination:'.swiper-pagination-'+ index,paginationType:($t.is('[data-pagination-type]'))?($t.data('pagination-type'),10):'bullets',paginationClickable:true,nextButton:'.swiper-button-next-'+ index,prevButton:'.swiper-button-prev-'+ index,slidesPerView:slidesPerViewVar,autoHeight:($t.is('[data-auto-height]'))?parseInt($t.data('auto-height'),10):0,loop:($t.is('[data-loop]'))?parseInt($t.data('loop'),10):0,autoplay:($t.is('[data-autoplay]'))?parseInt($t.data('autoplay'),10):2000,breakpoints:($t.is('[data-breakpoints]'))?{767:{slidesPerView:parseInt($t.attr('data-xs-slides'),10)},991:{slidesPerView:parseInt($t.attr('data-sm-slides'),10)},1199:{slidesPerView:parseInt($t.attr('data-md-slides'),10)}}:{},initialSlide:($t.is('[data-ini]'))?parseInt($t.data('ini'),10):0,speed:($t.is('[data-speed]'))?parseInt($t.data('speed'),10):500,keyboardControl:true,preloadImages:false,lazyLoading:true,mousewheelControl:($t.is('[data-mousewheel]'))?parseInt($t.data('mousewheel'),10):0,mousewheelReleaseOnEdges:true,direction:($t.is('[data-direction]'))?$t.data('direction'):'horizontal',spaceBetween:($t.is('[data-space-between]'))?parseInt($t.data('space-between'),10):0,effect:($t.is('[data-effect]'))?($t.data('effect'),'fade'):0,fade:{crossFade:true},onTransitionEnd:function(swiper){$t.find('.swiper-slide-current').text(swiper.activeIndex+ 1);},paginationFractionRender:function(swiper,currentClassName,totalClassName){return'<span class="'+ currentClassName+'"></span>'+' '+'<span class="'+ totalClassName+'"></span>';}});swipers['swiper-'+ index].update();initIterator++;});$('.swiper-container.swiper-control-top').each(function(){swipers['swiper-'+ $(this).attr('id')].params.control=swipers['swiper-'+ $(this).parent().find('.swiper-control-bottom').attr('id')];});$('.swiper-container.swiper-control-bottom').each(function(){swipers['swiper-'+ $(this).attr('id')].params.control=swipers['swiper-'+ $(this).parent().find('.swiper-control-top').attr('id')];});$('.custom-arrows-prev').on('click',function(){swipers['swiper-'+ $(this).siblings('.swiper-container').attr('id')].slidePrev();});$('.custom-arrows-next').on('click',function(){swipers['swiper-'+ $(this).siblings('.swiper-container').attr('id')].slideNext();});};$('.mobile-button').on('click',function(e){$(this).toggleClass('active');$('html').toggleClass('overflow-menu');$(this).parents('header').find('.toggle-block').slideToggle();e.preventDefault();});$('nav i.fa').on('click',function(e){$(this).parent().find('> ul').slideToggle(350);$(this).toggleClass('return-arrow');e.preventDefault();});$(document).on('click','.open-popup',function(){$('.popup-content').removeClass('active');$('.popup-wrapper, .popup-content[data-rel="'+ $(this).data('rel')+'"]').addClass('active');$('html').addClass('overflow-hidden');return false;});$(document).on('click','.popup-wrapper .button-close, .popup-wrapper .layer-close',function(){$('.popup-wrapper, .popup-content').removeClass('active');$('html').removeClass('overflow-hidden');setTimeout(function(){$('.ajax-popup').remove();},300);return false;});var TopBannerSlides=$('.top-baner').find('.swiper-wrapper .swiper-slide').length
$('.swiper-slide-total').html(TopBannerSlides);$(document).on('click','.video-open',function(e){e.preventDefault();var video=$(this).attr('href');$('.video-popup-container iframe').attr('src',video);$('.video-popup').addClass('active');});$('.video-popup-close, .video-popup-layer').on('click',function(e){$('.video-popup').removeClass('active');$('html').removeClass('overflow-hidden');$('.video-popup-container iframe').attr('src','about:blank')
e.preventDefault();});$('.isotope-nav').on('click','a',function(e){var $container=$(this).closest('.isotope-filter').find('.isotope-content');var filterValue=$(this).attr('data-filter');var $buttonGroup=$(this).parent().parent();var index=$buttonGroup.find('li').index($(this).parent());$buttonGroup.siblings('.isotope-select').find('option:eq('+ index+')').prop('selected',true);$container.isotope({filter:filterValue});$buttonGroup.find('.selected').removeClass('selected');$(this).parent().addClass('selected');e.preventDefault();});$('.isotope-select select').on('change',function(){var $container=$(this).closest('.isotope-filter').find('.isotope-content');var filterValue=$(this).find('option:selected').val();var index=$(this).find('option').index($(this).find('option:selected'));$container.isotope({filter:filterValue});var $buttonGroup=$(this).parents('.isotope-select').siblings('.isotope-nav');$buttonGroup.find('.selected').removeClass('selected');$buttonGroup.find('li').eq(index).addClass('selected');});var tabsFinish=0;$('.tab-menu').on('click',function(){if($(this).hasClass('active')||tabsFinish)return false;tabsFinish=1;var tabsWrapper=$(this).closest('.tabs-block'),tabsMenu=tabsWrapper.find('.tab-menu'),tabsItem=tabsWrapper.find('.tab-entry'),index=tabsMenu.index(this),thisContent=$(this).find('.as').html();$('.responsive-tab .as').html(thisContent);if($(window).width()<767){$('.tab-nav').slideToggle(400);}
tabsItem.filter(':visible').fadeOut(function(){tabsItem.eq(index).fadeIn(function(){tabsFinish=0;});});tabsMenu.removeClass('active');$(this).addClass('active');});$('.responsive-tab').on('click',function(){$(this).parent().find('.tab-nav').slideToggle(400);});$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+ this.hash.slice(1)+']');if(target.length){$('html, body').animate({scrollTop:target.offset().top},1000);if($(window).width()<767){$('.mobile-button').removeClass('active');$(this).parents('header').find('.toggle-block').slideToggle();$('html').removeClass('overflow-menu');}
return false;}}});});});});