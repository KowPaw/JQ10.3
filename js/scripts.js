$(function(){
	var carouselList = $('#carousel ul');
	var circleList = $('#carousel ol li');
	var circle = 0;
	var start;

	function startSlide() {
		start = setInterval(changeSlide, 3000);
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

	function changeCircle() {
		circleList.css('background', 'none');
		if (circle < 4) {
			circleList.eq(circle + 1).css('background', 'white');
			circle++;
		}
		else {
			circle = 0;
			circleList.eq(circle).css('background', 'white');
		}
	}


	circleList.eq(0).css('background', 'white');
	startSlide();

	
	$('.right-control').click(function(){
		circleList.css('background', 'none');
		changeCircle();
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
		clearInterval(start);
		startSlide();
	});
	$('.left-control').click(function(){
		circleList.css('background', 'none');
		if (circle == 0) {
			circle = 4;
			circleList.eq(circle).css('background', 'white');
		}
		else {
			circle--;
			circleList.eq(circle).css('background', 'white');
		}
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
		carouselList.animate({'marginLeft':0}, 500);
		clearInterval(start);
		startSlide();
	});

	$('#pic1').click(function(){
		if (circle > 0) {
			do {
				carouselList.animate({'marginLeft':-400}, 10, moveFirstSlide);
				circle++;
				}
			while (circle <= 4);
			circle = 0;
		}
		circleList.css('background', 'none');
		$(this).css('background', 'white');
		clearInterval(start);
		startSlide();
	});
	$('#pic2').click(function(){
		if (circle > 1) {
			do {
				carouselList.animate({'marginLeft':-400}, 10, moveFirstSlide);
				circle++;
				}
			while (circle <= 4);
			circle = 0;
		}
		for (circle; circle < 1; circle++) {
			carouselList.animate({'marginLeft':-400}, 10, moveFirstSlide);
		}
		circleList.css('background', 'none');
		$(this).css('background', 'white');
		clearInterval(start);
		startSlide();
	});
	$('#pic3').click(function(){
		if (circle > 2) {
			do {
				carouselList.animate({'marginLeft':-400}, 10, moveFirstSlide);
				circle++;
				}
			while (circle <= 4);
			circle = 0;
		}
		for (circle; circle < 2; circle++) {
			carouselList.animate({'marginLeft':-400}, 10, moveFirstSlide);
		}
		circleList.css('background', 'none');
		$(this).css('background', 'white');
		clearInterval(start);
		startSlide();
	});
	$('#pic4').click(function(){
		if (circle > 3) {
			do {
				carouselList.animate({'marginLeft':-400}, 10, moveFirstSlide);
				circle++;
				}
			while (circle <= 4);
			circle = 0;
		}
		for (circle; circle < 3; circle++) {
			carouselList.animate({'marginLeft':-400}, 10, moveFirstSlide);
		}
		circleList.css('background', 'none');
		$(this).css('background', 'white');
		clearInterval(start);
		startSlide();
	});
	$('#pic5').click(function(){
		for (circle; circle < 4; circle++) {
			carouselList.animate({'marginLeft':-400}, 10, moveFirstSlide);
		}
		circleList.css('background', 'none');
		$(this).css('background', 'white');
		clearInterval(start);
		startSlide();
	});

});
