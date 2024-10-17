// Set the date we're counting down to
var countDownDate = new Date("Oct 25, 2024 15:37:25").getTime();
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
   document.getElementById("demo").innerHTML ='<span id="day">'+ days + '</span>' +  '<span id="hours">'+ hours + '</span>'
   + '<span id="minutes">'+ minutes + '</span>' + '<span id="seconds">'+ seconds + '</span>';
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "";
    document.getElementById("after-expire").setAttribute("id","offer-expire-text");
    document.getElementById("offer-expire-text").innerHTML = "مدت زمان این محصول شگفت انگیز به پایان رسیده";
    document.getElementById("offer-blur").style.filter = "blur(2px)";
  }
 }, 1000);
$(".tt").tooltip("show");
$(".popovers").popover("show");
$(".tot").toast("show");