function cambiar(idOcultar, idMostrar) {
  $(idOcultar).hide();
  $(idMostrar).css('display', 'flex');
}

$('.no').on("touchstart click", function(e){ 
  e.preventDefault();
  cambiar('#f1', '#f2');
});

$('.weno').on("touchstart click", function(e){ 
  e.preventDefault();
  cambiar('#f2', '#f1');
});

$('.si').on("touchstart click", function(e){ 
  e.preventDefault();
  cambiar('#f1', '#f3');
});

$('.dale').on("touchstart click", function(e){ 
  e.preventDefault();
  cambiar('#f3', '#f4');
});

$('.rega').on("touchstart click", function(e){ 
  e.preventDefault();
  cambiar('#f4', '#f5');
});

$('.ojo').on("touchstart click", function(e){ 
  e.preventDefault();
  cambiar('#f5', '#f6');
});

$('.afi').on("touchstart click", function(e){ 
  e.preventDefault();
  $('#f6').hide();
  $('#f7, #f8').css('display', 'flex');
});

$('.salu').on("touchstart click", function(e){ 
  e.preventDefault();
  cambiar('#f8', '#f9');
});

$('.copy').on("touchstart click", function(e){ 
  e.preventDefault();
  $('#f9').hide();
  $('#f10, #f11').css('display', 'flex');
});

$('span.go').on("touchstart click", function(e){ 
  e.preventDefault();
  $('#f13').hide();
  $('#f14').css('display', 'block');
});

$('.ca1').on("touchstart click", function(e){ 
  e.preventDefault();
  $('#f12').css('display', 'flex');
  $('#f13').css('display', 'block');
});

$('.ca3').on("touchstart click", function(e){ 
  e.preventDefault();
  $('#f15').css('display', 'block');
  $('#f16').css('display', 'flex');
});

$('.ca2').on("touchstart click", function(e){ 
  e.preventDefault();
  $('#f18').css('display', 'block');
  $('#f19').css('display', 'flex');
});

$('.carta').on("touchstart click", function(e){ 
  e.preventDefault();
  $('#f12').hide();
});

$('.anillo').on("touchstart click", function(e){ 
  e.preventDefault();
  cambiar('#f16', '#f17');
});

$('.marry').on("touchstart click", function(e){ 
  e.preventDefault();
  $('#f15, #f17').hide();
});

$('.meme').on("touchstart click", function(e){ 
  e.preventDefault();
  cambiar('#f19', '#f20');
});

$('.meme2').on("touchstart click", function(e){ 
  e.preventDefault();
  cambiar('#f20', '#f21');
});

$('.yes').on("touchstart click", function(e){ 
  e.preventDefault();
  cambiar('#f21', '#f22');
});
