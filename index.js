var opened;
opened = false;

function dropDown () {
    if(!opened){
        opened = true;
        document.getElementById("header").style.height = "75%";
        document.getElementById("dropdown-content").style.display = "block";
        document.getElementById("hamLogo").src = "./assets/x.png"
        document.getElementById("hamLogo").style.height = "80%"

    }

    else if(opened){
        opened = false;
        document.getElementById("header").style.height = "10%";
        document.getElementById("dropdown-content").style.display = "none";
        document.getElementById("hamLogo").src = "./assets/ham.png"
        document.getElementById("hamLogo").style.height = "100%"
    }
    
}


document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', myFunctionForSticky);
 
    var header1 = document.getElementById("header");
  
    var sticky = header1.offsetTop;
  
    function myFunctionForSticky() {
      if (window.pageYOffset > sticky) {
        document.getElementById("header").style.position = "fixed";
      } else {
        document.getElementById("header").style.position = "absolute";
      }
    }
  })