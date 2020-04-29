jQuery(document).ready(function($){
	//move nav element position according to window width
	moveNavigation();
	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
		console.log(document.body.clientWidth);
	});

	$('.mail-input').on('click', function() {
		if ($('.mail-input').val() == "Введите email") $('.mail-input').val("");
		$('.mail-input').css('color', '#2C346E');
	});
	$('.mail-input').on('focusout', function() {
		if ($('.mail-input').val() == "") $('.mail-input').val("Введите email");
		$('.mail-input').css('color', '#4C8FFC');
	});
	$('.search-input').on('click', function() {
		if ($('.search-input').val() == "Поиск") $('.search-input').val("");
		$('.search-input').css('color', '#2C346E');
	});
	$('.search-input').on('focusout', function() {
		if ($('.search-input').val() == "") $('.search-input').val("Поиск");
		$('.search-input').css('color', '#4C8FFC');
	});

	//mobile version - open/close navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		if($('header').hasClass('nav-is-visible')) $('.moves-out').removeClass('moves-out');
		
		$('header').toggleClass('nav-is-visible');
		$('.cd-main-nav').toggleClass('nav-is-visible');
		$('.cd-main-content').toggleClass('nav-is-visible');
	});

	//mobile version - go back to main navigation
	$('.go-back').on('click', function(event){
		event.preventDefault();
		$('.cd-main-nav').removeClass('moves-out');
		if ($('.cd-main-nav').hasClass('moves-out-0')) $('.cd-main-nav').removeClass('moves-out-0');
		if ($('.cd-main-nav').hasClass('moves-out-1')) $('.cd-main-nav').removeClass('moves-out-1');
		if ($('.cd-main-nav').hasClass('moves-out-2')) $('.cd-main-nav').removeClass('moves-out-2');
		if ($('.cd-main-nav').hasClass('moves-out-3')) $('.cd-main-nav').removeClass('moves-out-3');
		if ($('.cd-main-nav').hasClass('moves-out-4')) $('.cd-main-nav').removeClass('moves-out-4');
		if ($('.cd-main-nav').hasClass('moves-out-5')) $('.cd-main-nav').removeClass('moves-out-5');
		if ($('.cd-main-nav').hasClass('moves-out-6')) $('.cd-main-nav').removeClass('moves-out-6');
		if ($('.cd-main-nav').hasClass('moves-out-7')) $('.cd-main-nav').removeClass('moves-out-7');
	});

	//open sub-navigation
	$('.cd-subnav-trigger-0').on('click', function(event){
		event.preventDefault();
		$('.cd-main-nav').toggleClass('moves-out');
		$('.cd-main-nav').toggleClass('moves-out-0');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-1').css('z-index', '0'); else $('.cd-subnav-trigger-1').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-2').css('z-index', '0'); else $('.cd-subnav-trigger-2').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-3').css('z-index', '0'); else $('.cd-subnav-trigger-3').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-4').css('z-index', '0'); else $('.cd-subnav-trigger-4').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-5').css('z-index', '0'); else $('.cd-subnav-trigger-5').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-6').css('z-index', '0'); else $('.cd-subnav-trigger-6').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-7').css('z-index', '0'); else $('.cd-subnav-trigger-7').css('z-index', '1');
	});
	$('.cd-subnav-trigger-1').on('click', function(event){
		event.preventDefault();
		$('.cd-main-nav').toggleClass('moves-out');
		$('.cd-main-nav').toggleClass('moves-out-1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-0').css('z-index', '0'); else $('.cd-subnav-trigger-0').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-2').css('z-index', '0'); else $('.cd-subnav-trigger-2').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-3').css('z-index', '0'); else $('.cd-subnav-trigger-3').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-4').css('z-index', '0'); else $('.cd-subnav-trigger-4').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-5').css('z-index', '0'); else $('.cd-subnav-trigger-5').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-6').css('z-index', '0'); else $('.cd-subnav-trigger-6').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-7').css('z-index', '0'); else $('.cd-subnav-trigger-7').css('z-index', '1');
	});
	$('.cd-subnav-trigger-2').on('click', function(event){
		event.preventDefault();
		$('.cd-main-nav').toggleClass('moves-out');
		$('.cd-main-nav').toggleClass('moves-out-2');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-0').css('z-index', '0'); else $('.cd-subnav-trigger-0').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-1').css('z-index', '0'); else $('.cd-subnav-trigger-1').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-3').css('z-index', '0'); else $('.cd-subnav-trigger-3').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-4').css('z-index', '0'); else $('.cd-subnav-trigger-4').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-5').css('z-index', '0'); else $('.cd-subnav-trigger-5').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-6').css('z-index', '0'); else $('.cd-subnav-trigger-6').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-7').css('z-index', '0'); else $('.cd-subnav-trigger-7').css('z-index', '1');
	});
	$('.cd-subnav-trigger-3').on('click', function(event){
		event.preventDefault();
		$('.cd-main-nav').toggleClass('moves-out');
		$('.cd-main-nav').toggleClass('moves-out-3');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-0').css('z-index', '0'); else $('.cd-subnav-trigger-0').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-1').css('z-index', '0'); else $('.cd-subnav-trigger-1').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-2').css('z-index', '0'); else $('.cd-subnav-trigger-2').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-4').css('z-index', '0'); else $('.cd-subnav-trigger-4').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-5').css('z-index', '0'); else $('.cd-subnav-trigger-5').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-6').css('z-index', '0'); else $('.cd-subnav-trigger-6').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-7').css('z-index', '0'); else $('.cd-subnav-trigger-7').css('z-index', '1');
	});
	$('.cd-subnav-trigger-4').on('click', function(event){
		event.preventDefault();
		$('.cd-main-nav').toggleClass('moves-out');
		$('.cd-main-nav').toggleClass('moves-out-4');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-0').css('z-index', '0'); else $('.cd-subnav-trigger-0').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-1').css('z-index', '0'); else $('.cd-subnav-trigger-1').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-2').css('z-index', '0'); else $('.cd-subnav-trigger-2').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-3').css('z-index', '0'); else $('.cd-subnav-trigger-3').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-5').css('z-index', '0'); else $('.cd-subnav-trigger-5').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-6').css('z-index', '0'); else $('.cd-subnav-trigger-6').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-7').css('z-index', '0'); else $('.cd-subnav-trigger-7').css('z-index', '1');
	});
	$('.cd-subnav-trigger-5').on('click', function(event){
		event.preventDefault();
		$('.cd-main-nav').toggleClass('moves-out');
		$('.cd-main-nav').toggleClass('moves-out-5');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-0').css('z-index', '0'); else $('.cd-subnav-trigger-0').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-1').css('z-index', '0'); else $('.cd-subnav-trigger-1').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-2').css('z-index', '0'); else $('.cd-subnav-trigger-2').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-3').css('z-index', '0'); else $('.cd-subnav-trigger-3').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-4').css('z-index', '0'); else $('.cd-subnav-trigger-4').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-6').css('z-index', '0'); else $('.cd-subnav-trigger-6').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-7').css('z-index', '0'); else $('.cd-subnav-trigger-7').css('z-index', '1');
	});
	$('.cd-subnav-trigger-6').on('click', function(event){
		event.preventDefault();
		$('.cd-main-nav').toggleClass('moves-out');
		$('.cd-main-nav').toggleClass('moves-out-6');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-0').css('z-index', '0'); else $('.cd-subnav-trigger-0').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-1').css('z-index', '0'); else $('.cd-subnav-trigger-1').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-2').css('z-index', '0'); else $('.cd-subnav-trigger-2').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-3').css('z-index', '0'); else $('.cd-subnav-trigger-3').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-4').css('z-index', '0'); else $('.cd-subnav-trigger-4').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-5').css('z-index', '0'); else $('.cd-subnav-trigger-5').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-7').css('z-index', '0'); else $('.cd-subnav-trigger-7').css('z-index', '1');
	});
	$('.cd-subnav-trigger-7').on('click', function(event){
		event.preventDefault();
		$('.cd-main-nav').toggleClass('moves-out');
		$('.cd-main-nav').toggleClass('moves-out-7');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-0').css('z-index', '0'); else $('.cd-subnav-trigger-0').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-1').css('z-index', '0'); else $('.cd-subnav-trigger-1').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-2').css('z-index', '0'); else $('.cd-subnav-trigger-2').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-3').css('z-index', '0'); else $('.cd-subnav-trigger-3').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-4').css('z-index', '0'); else $('.cd-subnav-trigger-4').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-5').css('z-index', '0'); else $('.cd-subnav-trigger-5').css('z-index', '1');
		if ($('.cd-main-nav').hasClass('moves-out')) $('.cd-subnav-trigger-6').css('z-index', '0'); else $('.cd-subnav-trigger-6').css('z-index', '1');
	});

	function moveNavigation(){
		var navigation = $('.cd-main-nav-wrapper');
  		var screenSize = checkWindowWidth();
        if ( screenSize ) {
        	//desktop screen - insert navigation inside header element
			navigation.detach();
			// if ($('.cd-main-nav').hasClass('moves-out-1')) $('.cd-main-nav').removeClass('moves-out-1');
			// if ($('.cd-main-nav').hasClass('moves-out-2')) $('.cd-main-nav').removeClass('moves-out-2');
			// if ($('.cd-main-nav').hasClass('moves-out-3')) $('.cd-main-nav').removeClass('moves-out-3');
			// if ($('.cd-main-nav').hasClass('moves-out-4')) $('.cd-main-nav').removeClass('moves-out-4');
			// if ($('.cd-main-nav').hasClass('moves-out-5')) $('.cd-main-nav').removeClass('moves-out-5');
			// if ($('.cd-main-nav').hasClass('moves-out-6')) $('.cd-main-nav').removeClass('moves-out-6');
			// if ($('.cd-main-nav').hasClass('moves-out-7')) $('.cd-main-nav').removeClass('moves-out-7');
			navigation.insertBefore('.cd-nav-trigger');
		} else {
			//mobile screen - insert navigation after .cd-main-content element
			navigation.detach();
			navigation.insertAfter('.cd-main-content');
		}
	}

	function checkWindowWidth() {
		var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '');
		return ( mq == 'mobile' ) ? false : true;
	}
});


function topBlock() {
    var par = $('.top-video-block');
    par.outerHeight(windowHeight);
}


var windowWidth = $(window).width();
var windowHeight = $(window).outerHeight();


if (windowWidth >= 1024) {
    tabAll(true);
    mouseLeaveProjects(true);
} else {
    tabAll(false);
    mouseLeaveProjects(false);
}


$(window).on('resize', function () {
    windowWidth = $(window).width();
    windowHeight = $(window).outerHeight();
    delBlocks();
    noneMobile();
    widthHeight();


    if (windowWidth >= 1024) {
        tabAll(true);
        mouseLeaveProjects(true);
    } else {
        tabAll(false);
        mouseLeaveProjects(false);
    }

});


function delBlocks() {
    var width = $(window).width();
    var xx = $('.empty');
    if (width <= 479) {
        xx.detach();
    } else {
        if (!$('.projects .item.empty').length) {
            $('<div class="item bg-image-cover empty"></div><div class="item bg-image-cover empty"></div>').insertAfter($('.projects .item.after-this'));
        }
    }
}


function tabAll(enable) {
    if (enable) {
        $('.projects .item[data-go]').mouseenter(function () {
            var thisGO = $(this).attr('data-go');
            var thisBlock = $('*[data-block=' + thisGO + ']');
            var thisBG = $('*[data-bg=' + thisGO + ']');
            $('.title').hide();
            $('*[data-block]').hide();
            $('*[data-bg]').stop(true, true).fadeOut(500);
            thisBlock.stop(true, true).fadeIn(500);
            thisBG.stop(true, true).fadeIn(500);
        });
    } else {
        $('.projects .item[data-go]').off('mouseenter');
    }

}


function mouseLeaveProjects(enable) {
    if (enable) {
        $('.projects').mouseleave(function () {
            $('*[data-block]').hide();
            $('*[data-bg]').stop().fadeOut(500);
            $('.title').stop().fadeIn(500);
            $('.block-our-projects .default').stop().fadeIn(500);
        })
    } else {
        $('.projects').off('mouseleave');
    }
}


function widthHeight() {
    var widthBlock = $('.wrapper-peoples__img').width();
    var widthBlockFour = widthBlock * 4;
    $('.wrapper-peoples').height(widthBlockFour);
}


// Функция стирания display none
function noneMobile() {
    var width = $(window).width();
    if (width >= 768) {
        $('.tabs-content .this-content').removeAttr('style');
    }
}




