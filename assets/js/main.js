window.onload = function() {
	$.material.init();
	$('.slider').unslider({
		autoplay: true
	});
	$('#secondary').simpleScrollFollow({
		limit_elem: $('main'),
		setEnabled: true
	});
	$('#myTab a').click(function (e) {
  	e.preventDefault()
  	$(this).tab('show')
	});
	$('#before-tab').click();
	$('#video-tab').click();
	$(function(){
	    function footerPosition(){
	        $("#colophon").removeClass("fixed-bottom");
	        var contentHeight = document.body.scrollHeight;
	        var winHeight = window.innerHeight;
	        if(!(contentHeight > winHeight)){
	            $("#colophon").addClass("fixed-bottom");
	        }
	    }
			function aside(){
				var contentWidth = document.body.scrollWidth;
				if (contentWidth < 992) {
					$('#secondary').simpleScrollFollow('setEnabled', false);
				} else {
					$('#secondary').simpleScrollFollow('setEnabled', true);
				}
			}
	    footerPosition();
			aside();
	    $(window).resize(footerPosition);
	    $(window).resize(aside);
			$(window).scroll(function () {
				var position = $('#secondary').css('position');
				if (position === 'fixed') {
					$('#secondary').addClass('secondaryTop');
				} else {
					$('#secondary').removeClass('secondaryTop');
				}
			});
	});
};