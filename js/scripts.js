$(function(){
	var carouselList = $('#carousel ul');
	var circleList = $('#carousel ol li');
	var realIndex = 0;
	var slideTimer;
	var slideLength = circleList.length;

	function changeSlide(index) {
		realIndex = index;
		carouselList.animate({'marginLeft': -400 * index}, 500);
		circleList.removeClass('point');
		circleList.eq(index).addClass('point');
	}

	function autoChangeSlide() {
		var index = (realIndex >= slideLength - 1) ? 0 : realIndex + 1;
		changeSlide(index);
	}

		function startSlide() {
		slideTimer = setInterval(autoChangeSlide, 3000);
	}

	circleList.click(function(){
		var index = $(this).index();
		clearInterval(slideTimer);
		changeSlide(index);
		startSlide();
	});

	$('.right-control').click(function(){
		var index = (realIndex >= slideLength - 1) ? 0 : realIndex + 1;
		clearInterval(slideTimer);
		changeSlide(index);
		startSlide();
	});

	$('.left-control').click(function(){
		var index = (realIndex == 0) ? slideLength - 1 : realIndex - 1;
		clearInterval(slideTimer);
		changeSlide(index);
		startSlide();
	});

	changeSlide(realIndex);
	startSlide();

});






// old version
/*$(function(){
	var carouselList = $('#carousel ul');
	var circleList = $('#carousel ol li');
	var circle = 0;
	var slideTimer;
	var slideLength = circleList.length;

	function startSlide() {
		slideTimer = setInterval(changeSlide, 3000);
	}

	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
		changeCircle();
	}

	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

	function reverseSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
		carouselList.animate({'marginLeft':0}, 500);
	}

	function changeCircle() {
		circleList.eq(circle).css('background', 'none');
		if (circle < slideLength - 1) {
			circleList.eq(circle + 1).css('background', 'white');
			circle++;
		}
		else {
			circle = 0;
			circleList.eq(circle).css('background', 'white');
		}
	}

	function reverseCircle () {
		circleList.eq(circle).css('background', 'none');
		if (circle == 0) {
			circle = slideLength - 1;
			circleList.eq(circle).css('background', 'white');
		}
		else {
			circle--;
			circleList.eq(circle).css('background', 'white');
		}
	}

	function jumpSlide () {
		do {
			carouselList.animate({'marginLeft':-400}, 10, moveFirstSlide);
			circle++;
			}
		while (circle <= slideLength - 1);
		circle = 0;
	}

	function restart () {
		circleList.eq(circle).css('background', 'white');
		clearInterval(slideTimer);
		startSlide();
	}


	circleList.eq(0).css('background', 'white');
	startSlide();

	
	$('.right-control').click(function(){
		changeSlide();
		clearInterval(slideTimer);
		startSlide();
	});
	$('.left-control').click(function(){
		reverseCircle();
		reverseSlide();
		clearInterval(slideTimer);
		startSlide();
	});

	$('#pic1').click(function(){
		circleList.eq(circle).css('background', 'none');
		if (circle > 0) {
			jumpSlide();
		}
		restart();
	});
	$('#pic2').click(function(){
		circleList.eq(circle).css('background', 'none');
		if (circle > 1) {
			jumpSlide();
		}
		for (circle; circle < 1; circle++) {
			carouselList.animate({'marginLeft':-400}, 10, moveFirstSlide);
		}
		restart();
	});
	$('#pic3').click(function(){
		circleList.eq(circle).css('background', 'none');
		if (circle > 2) {
			jumpSlide();
		}
		for (circle; circle < 2; circle++) {
			carouselList.animate({'marginLeft':-400}, 10, moveFirstSlide);
		}
		restart();
	});
	$('#pic4').click(function(){
		circleList.eq(circle).css('background', 'none');
		if (circle > 3) {
			jumpSlide();
		}
		for (circle; circle < 3; circle++) {
			carouselList.animate({'marginLeft':-400}, 10, moveFirstSlide);
		}
		restart();
	});
	$('#pic5').click(function(){
		circleList.eq(circle).css('background', 'none');
		for (circle; circle < 4; circle++) {
			carouselList.animate({'marginLeft':-400}, 10, moveFirstSlide);
		}
		restart();
	});

});*/
