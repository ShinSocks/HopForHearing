var opened;
opened = false;

function dropDown () {
    if(!opened){
        opened = true;
        document.getElementById("header").style.height = "75%";
        document.getElementById("dropdown-content").style.display = "block";
        document.getElementById("hamLogo").src = "./assets/x.png"

    }

    else if(opened){
        opened = false;
        document.getElementById("header").style.height = "10%";
        document.getElementById("dropdown-content").style.display = "none";
        document.getElementById("hamLogo").src = "./assets/hamburger.png"
    }
    
}