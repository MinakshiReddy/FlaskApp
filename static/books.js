
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


//Scroll indicator
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar2").style.width = scrolled + "%";
}