var countDownDate = new Date("October 18, 2024 15:30:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    var minutes = Math.floor(distance % (1000 * 60 * 60)) / (1000 * 60);
    var seconds = Math.floor(distance % (1000 * 60)) / 1000;
    document.getElementById("demo").innerHTML = '<span id="day">' + days + '<span id="hours">' + hours + '<span id="minutes">' + minutes + '<span id="minutes">' + seconds + '<span>';
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "به پایان رسید";
    }
}, 1000);