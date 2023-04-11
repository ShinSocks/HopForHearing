var opened;
opened = false;

var opened1;
opened1 = false;

var opened2;
opened2 = false;

var opened3;
opened3 = false;

var opened4;
opened3 = false;

function dropDown () {
    if(!opened){
        opened = true;
        document.getElementById("header").style.height = "75%";
        document.getElementById("headerDropDown").style.display = "block";
        document.getElementById("hamLogo").src = "./assets/x.png"
        document.getElementById("hamLogo").style.height = "80%"

    }

    else if(opened){
        opened = false;
        document.getElementById("header").style.height = "10%";
        document.getElementById("headerDropDown").style.display = "none";
        document.getElementById("hamLogo").src = "./assets/ham.png"
        document.getElementById("hamLogo").style.height = "100%"
    }
    
}

function dropDown1 () {
  if(!opened1){
      opened1 = true;
      document.getElementById("dropContainer1").style.height = "27cm";
      
      
      //document.getElementById("hamLogo").src = "./assets/x.png"
      //document.getElementById("hamLogo").style.height = "80%"

  }

  else if(opened1){
      opened1 = false;
      document.getElementById("dropContainer1").style.height = "5cm";
      
      //document.getElementById("hamLogo").src = "./assets/ham.png"
     // document.getElementById("hamLogo").style.height = "100%"
  }
  
}

function dropDown2 () {
  if(!opened2){
      opened2 = true;
      document.getElementById("dropContainer2").style.height = "27cm";
      
      //document.getElementById("hamLogo").src = "./assets/x.png"
      //document.getElementById("hamLogo").style.height = "80%"

  }

  else if(opened2){
      opened2 = false;
      document.getElementById("dropContainer2").style.height = "5cm";
     
      //document.getElementById("hamLogo").src = "./assets/ham.png"
     // document.getElementById("hamLogo").style.height = "100%"
  }
  
}

function dropDown3 () {
  if(!opened3){
      opened3 = true;
      document.getElementById("dropContainer3").style.height = "69cm";
      
      
      //document.getElementById("hamLogo").src = "./assets/x.png"
      //document.getElementById("hamLogo").style.height = "80%"

  }

  else if(opened3){
      opened3 = false;
      document.getElementById("dropContainer3").style.height = "5cm";
      
      //document.getElementById("hamLogo").src = "./assets/ham.png"
     // document.getElementById("hamLogo").style.height = "100%"
  }
  
}

function dropDown4 () {
  if(!opened4){
      opened4 = true;
      document.getElementById("dropContainer4").style.height = "130cm";
      
      
      //document.getElementById("hamLogo").src = "./assets/x.png"
      //document.getElementById("hamLogo").style.height = "80%"

  }

  else if(opened4){
      opened4 = false;
      document.getElementById("dropContainer4").style.height = "5cm";
      
      //document.getElementById("hamLogo").src = "./assets/ham.png"
     // document.getElementById("hamLogo").style.height = "100%"
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