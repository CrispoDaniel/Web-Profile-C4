const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('header ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

// Scroll Top
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// buat waktu
function showTime(){
  var a_p = "";
  var date = new Date();
  var jam = date.getHours();
	var menit = date.getMinutes();
  if (jam < 12) {
  a_p = "AM";
  }
  else{
  a_p = "PM";
  }
  if (jam == 12) {
  jam = 0;
  }
  if (jam > 12) {
  jam = jam - 12;
  }
  jam = checkTime(jam);
  menit = checkTime(menit);
  document.getElementById('clock').innerHTML=jam + ":" + menit + " " + a_p;
  }
  function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
    }
    return i;
  }
setInterval(showTime, 500);


// buat tanggal
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];
var myDays = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var thisDay = date.getDay(),
thisDay = myDays[thisDay];
document.getElementById('date').innerHTML=thisDay +', ' + months[month] +' '+ day;

// Typed function
var judul2 = new Typed('#judul2', {
strings: ["PROJECT C4 TEAM"],
typeSpeed: 250,
startDelay: 90,
backDelay: 500,
backSpeed: 50,
loop: true
});