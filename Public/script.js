$(document).ready(function() { 


$('h1').toggle(1000).toggle(2000);

$('h4').hover(function() {
   	 $('h4').fadeOut(500).fadeIn(2000);
});

// $('h5').slideUp(8000).slideDown(5000);

$('.main').hover(function() {
   	 $('.about').fadeOut(500).fadeIn(2000);
});

// $('h5').hide(function() {
//    	 $('.hello').hoverfadeOut(500).fadeIn(2000);
// });

  $('h5').hide(1000);

  $('.hello').hover(function() {
  	  $('h5').show(1000).delay(10000).fadeOut(3500);
  });

 $('.hello2').hover(function() {
  	  $('h5').show(1000).delay(10000).fadeOut(3500);
  });

$('.hello3').hover(function() {
  	  $('h5').show(1000).delay(10000).fadeOut(3500);
});

$('h6').hide(200);

$('.Liz').hover(function() {
  	  $('h6').show(1000);
});

$('h7').hide(200);

$('.Karen').hover(function() {
  	  $('h7').show(1000);
});

$('h8').hide(200);

$('.Shrads').hover(function() {
  	  $('h8').show(1000);
});











}); // Closing tags. DO NOT DELETE