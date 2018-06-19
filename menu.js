var i = 0;
var images = document.querySelectorAll("#pics img");
images[i].style.display="block";
var descriptions = document.querySelectorAll("#description p");
descriptions[i].style.display ="block";

function show() {
  images[i].style.display = "none";
  descriptions[i].style.display="none";
  if (i == (images.length-1)){
    i = 0;
  } else {
    i++;
  }
  TweenLite.from(images[i], 0.8, {opacity:0, y:100, ease:Power1.easeOut });
  images[i].style.display="block";
  TweenLite.from(descriptions[i], 0.8, {opacity:0, y:100, ease:Power1.easeOut, delay: 0 });
  descriptions[i].style.display ="block";
}

function showPrev(){
  images[i].style.display = "none";
  descriptions[i].style.display="none";
  if (i==0){
    i = images.length-1;
  } else {
    i--;
  }
  TweenLite.from(images[i], 0.8, {opacity:0, y:100, ease:Power1.easeOut });
  images[i].style.display="block";
  TweenLite.from(descriptions[i], 0.8, {opacity:0, y:100, ease:Power1.easeOut, delay: 0 });
  descriptions[i].style.display ="block";
}



  // for(var i = 0; i < images.length; i++)
  // {
  //   images[i].src = images[i].getAttribute('data-src');
  //   if (i == images.length -1){
  //     i ==0;
    // }
