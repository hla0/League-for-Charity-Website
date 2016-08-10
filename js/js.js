function mymargtop() {
	var body_h = $(window).height();
	var container_h = $('.filtr_bg').height();	
	var marg_top = Math.abs((body_h - container_h)/2);	
	$('.filtr_bg').css('margin-top', marg_top);
	$('.filtr_bg').css('margin-bottom', marg_top);
}

jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
	
	/**/	
	if (mywindow.scrollTop() < 1) {
		$('.navigation li[data-slide="1"]').addClass('active');
	}
	/**/

    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
			
			$('.navigation li[data-slide="1"]').removeClass('active');
			
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    /*function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top + 4
        }, 2000, 'easeInOutQuint');
    }*/
	
	function goToByScroll(dataslide) {
		var goal = $('.slide[data-slide="' + dataslide + '"]').offset().top;
		if (mywindow.scrollTop()<goal) {
			var goalPx = goal + 5;
		} else {
			var goalPx = goal - 50;
		}
        htmlbody.animate({
            scrollTop: goalPx
        }, 2000, 'easeInOutQuint');
    }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
	
	//prettyPhoto
		$("a[rel^='prettyPhoto']").prettyPhoto();
	
	// Sticky Navigation	
		$(".menu").sticky({topSpacing:0});
	
	
	$("#slide1, #slide5, #slide7").each(function () {
        var slide_h = $(this).height();
		
		$(this).css('background-size', '100% '+slide_h+'px');
		
    });
	
	
	
	




//DROP menu	
	if ($(window).width()<750){
		$(".btn_dropdown").click(function(){
			$(".navigation").slideToggle("slow");
		});
		$(".navigation li").click(function(){
			$(".navigation").hide("fast");
		});
	}

//accordion
	
	
		$(".accordion h3").click(function(){
			$(this).next(".accord_cont").slideToggle("fast")
			.siblings(".accord_cont:visible").slideUp("fast");
			$(this).toggleClass("active");
			$(this).siblings("h3").removeClass("active");
		});	
	
	
	sliderHeight();
	
	mymargtop ();
	
	$("#slide9").each(function () {
        var slide_h = $(this).height();
		
		$(this).css('background-size', '100% '+slide_h+'px');
		
    });
	
});

	$(window).bind('resize',function() {
		
	//Update slider height
	sliderHeight();
	
	mymargtop ();
	
});