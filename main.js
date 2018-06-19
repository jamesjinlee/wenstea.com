

// window.onload = function(){
// 	classie.add()
//
// }
// disable scrolling



// //add loading class to logo
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }
//
//
// var x = document.getElementById('container');
// x.className += " loading";
// console.log(x.className);


// //add loaded lass to header and logo
// var sec = 0;
// window.setInterval(function(){
//   sec++;
//   //after x amount of seconds start logo animation to load main page
// 	if (sec==2){
//
// 		var x = document.getElementById('container');
// 		x.className = "container loaded";
// 		console.log(x.className);
//
//
// 		var x = document.getElementById('container');
// 		x.className += " layout-switch";
// 		console.log(x.className + "layout")
//
// 		var y = document.getElementsByTagName("body")[0].style.overflow = "scroll";
// 		console.log("SCROLL" + y);
//
//
//
//
// 		// document.getElementById("green-box").style.height = "100%";
// 		//
// 		// console.log(document.getElementById("green-box").style.height);
//
// 	}
// }, 1000);

AOS.init();
$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});

//load map
function initMap() {
	var uluru = {lat: 21.294619, lng: -157.841497};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 18,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}
