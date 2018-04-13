var images = document.getElementsByTagName('img');


//rotate Google's logo
$('#hplogo').addClass('rotate');

// replace images when the page loads
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}

// replace text in the page when it loads
$('body').children().each(function () {
	// replace the '@' sign with a '$' sign
	$(this).html( $(this).html().replace(/breach/g,'privacy') );
});

$('body').children().each(function () {
	$(this).html( $(this).html().replace(/unsafe/g,'secure') );
});

$('body').children().each(function () {
	$(this).html( $(this).html().replace(/violation/g,'privacy') );
});

$('#viewport').addClass('gradient');
}