$( document ).ready(function() {
	$('.dropdown-lang').dropdown();

	$('.single-item').slick({
		 dots: true,
  		infinite: true,
  		speed: 500,
  		arrows:true,
  		fade: true,
  		cssEase: 'linear',
  		autoplay: true,
  		autoplaySpeed: 2000,
	});
	
	$('.store_block_catalogs').slick({
  	slidesToShow: 5,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 5000,
	});
		

	$('.new_block_catalogs').slick({
  	slidesToShow: 5,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 5000,
	});
  $('.popular_block_catalogs').slick({
  	slidesToShow: 5,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 5000,
	});
	

});
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";

	document.getElementById("overlay").style.display = "block";

}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
 // document.body.id="";
}

