$(document).ready(function(){
var h = $(window).height();
console.log(h);
$("#get_started").click(function(){
	$('html, body').animate({
		scrollTop: h}, 300);
	});
$("#go").click(function(){
	$('html, body').animate({
		scrollTop: 2*h}, 300);
	});
$(".photo").hover(function(){
	console.log("hover");
	setTimeout(function(){
		$("#photo1").animate({
			opacity:1
		},500);
	},1000);
	setTimeout(function(){
		$("#photo1").animate({
			opacity:0
		},500);
	},15000);
	setTimeout(function(){
		$("#photo2").animate({
			opacity:1
		},500);
	},2000);
	setTimeout(function(){
		$("#photo2").animate({
			opacity:0
		},500);
	},10000);
	setTimeout(function(){
		$("#photo3").animate({
			opacity:1
		},500);
	},3000);
	setTimeout(function(){
		$("#photo3").animate({
			opacity:0
		},500);
	},9500);
	setTimeout(function(){
		$("#photo4").animate({
			opacity:1
		},500);
	},4000);
	setTimeout(function(){
		$("#photo4").animate({
			opacity:0
		},500);
	},9000);
	setTimeout(function(){
		$("#photo5").animate({
			opacity:1
		},500);
	},5000);
	setTimeout(function(){
		$("#photo5").animate({
			opacity:0
		},500);
	},8500);
	setTimeout(function(){
		$("#photo6").animate({
			opacity:1
		},500);
	},6000);
	setTimeout(function(){
		$("#photo6").animate({
			opacity:0
		},500);
	},8000);
	setTimeout(function(){
		$("#photo7").animate({
			opacity:1
		},500);
	},7000);
	setTimeout(function(){
		$("#photo7").animate({
			opacity:0
		},500);
	},7500);

});

$(".photo").click(function(){
	$('html, body').animate({
		scrollTop: 3*h}, 300);
	
	
});
});

