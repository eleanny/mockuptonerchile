var altura = $('.navbar').offset().top;

$(window).scroll(function(){
	// Aquí va el código que se ejecuta mientras haces el scroll y debe estar fuera del $(window).ready()
	if ($(window).scrollTop() > altura){
	  
	   $('.navbar').addClass('fixed-top');
    }
	// Esta variable almacenaría la distancia con el top, para poder comparar y así ejecutar algún script en cierto minuto
	else{
	   $('.navbar').removeClass('fixed-top');
    }
});



$(document).ready(function() {
  //if ( $( "h1" ).is( ":hidden" ) ) {
  //  $( "h1" ).slideDown( "slow" );
 // } else {
 //   $( "h1" ).hide();
//  }

  $( "#blink" ).animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );

});

