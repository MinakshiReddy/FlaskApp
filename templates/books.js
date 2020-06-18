var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex+=n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//menu button
document.getElementById("myBtn").addEventListener("click", open_close);
var menuState = 0 // close
function open_close(x) {
  if(menuState === 0){
     menuState = 1;
     var step=260;
     var x=document.getElementById('my').offsetLeft;
     x= x+ step;
     document.getElementById('my').style.left= x + "px";
     document.getElementById("myBtn").classList.toggle("change");
  }
  else {
     menuState = 0;
     var step=260;
     var x=document.getElementById('my').offsetLeft;
     x= x - step;
     document.getElementById('my').style.left= x + "px";
     document.getElementById("myBtn").classList.toggle("change");
  }
}


//show models
function showBox(id){
    document.getElementById(id).style.display='block';
}

//switch models
function changeModel() {
  var x = document.getElementById("login");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



