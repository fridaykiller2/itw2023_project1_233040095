// event pada saat link diklik
$('.page-scroll').on('click', function (e) {
	// isi href
	var Tujuan = $(this).attr('href');
	// element bersangkutan ditangkap
	var elemenTujuan = $(Tujuan);
	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top -50
	}, 1250, 'easeInOutExpo');

e.preventDefault();

});

//parallax
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	//portfolio
	if(wScroll > $('.portfolio').offset().top -250 ){
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 200 * i);
		});
	}

});