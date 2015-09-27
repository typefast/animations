
$(window).on('DOMMouseScroll mousewheel', function(e) {
	if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0 ) { //mouse scroll
		//showing div -500px
		$('.helloWorld').show();
		//removing class Alternative is to use a conditional statement to check if the class is applied
		$('.helloWorld').removeClass('run-fadeOutLeft').addClass('run-fadeInLeft');
		//showing div -500px
		$('.simple').show();
		//removing and adding class animations
		$('.simple').removeClass('run-fadeOutRight').addClass('run-fadeInRight');

	} else {
		// if scroll wheel is scrolled up
		//remove the fadeIn keyframe animation class and add the fadeOut class
		$('.helloWorld').removeClass('run-fadeInLeft').addClass('run-fadeOutLeft');
		//delay by 2s and queue - pass an anonymous function to hide the element after 2s
		$('.helloWorld').delay(2000).queue(function() {
			$('.helloWorld').hide();
		});
		//same again
		$('.simple').removeClass('run-fadeInRight').addClass('run-fadeOutRight');
		$('.simple').delay(2000).queue(function() {
			$('.simple').hide();
		});
		
		
	}
	return false;
});

/*$('#animateButton').click(function() {
	$('h1').addClass('run-fader'); 
}); */