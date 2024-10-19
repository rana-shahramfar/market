// Set the date we're counting down to
var countDownDate = new Date("Oct 24, 2024 15:37:25").getTime();
// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in an element with id="demo"
  // document.getElementById("demo").innerHTML = '<span id="day">' + days + '</span>' + '<span id="hours">' + hours + '</span>'
  //   + '<span id="minutes">' + minutes + '</span>' + '<span id="seconds">' + seconds + '</span>';
  var z = document.getElementsByClassName("demos");
  for (var i = 0; i < z.length; i++) {
    z[i].innerHTML = '<span id="day">' + days + '</span>' + '<span id="hours">' + hours + '</span>'
      + '<span id="minutes">' + minutes + '</span>' + '<span id="seconds">' + seconds + '</span>';
  }
 
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "";
    var y = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
      y[i].innerHTML = "";
    }
    // document.getElementById("after-expire").setAttribute("id", "offer-expire-text");
    var g = document.getElementsByClassName("after-expire");
    for (var i = 0; i < z.length; i++) {
      g[i].classList.add("offer-expire-text");
    }
    // document.getElementById("offer-expire-text").innerHTML = "مدت زمان این محصول شگفت انگیز به پایان رسیده";
    var d = document.getElementsByClassName("offer-expire-text");
    for (var i = 0; i < z.length; i++) {
      d[i].innerHTML = "مدت زمان این محصول شگفت انگیز به پایان رسیده";
    }
    // document.getElementById("offer-blur").style.filter = "blur(2px)";
    var t = document.getElementsByClassName("offer-blur");
    for (var i = 0; i < z.length; i++) {
      t[i].style.filter = "blur(2px)";
    }
  }
}, 1000);
//set up owl carousel//
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    rtl:true,
    stagePadding: 100,
    items:4,
    loop:true,
    margin:0,
    dots:true,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      },
      1200:{
        items:4,
        nav:true,
        loop:false
    }
  }
  });

});

$(".tt").tooltip("show");
$(".popovers").popover("show");
$(".tot").toast("show");