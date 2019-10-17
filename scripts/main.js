window.onscroll = () => {
    colorChange();
    textFade();
};

window.onload = () => {
    textLoad();
}

//Changes color of navbar when scrolling to sections
colorChange = () => {
    let navbar = document.querySelectorAll(".navbar a");
    if (this.scrollY >= document.getElementById("projects").offsetTop -5 && this.scrollY < document.getElementById("contact").offsetTop - 100){
        for (i = 0; i < navbar.length; i++){
            navbar[i].classList.replace("nav-links-btn", "nav-links-btn-drk");
        }
    } else {
        for (i = 0; i < navbar.length; i++){
            navbar[i].classList.replace("nav-links-btn-drk" , "nav-links-btn");
        }
    }
}

//Changes opacity of elements with animate-text class
textFade = () => {
    let text = document.querySelectorAll(".text-fade");
    for (i = 0; i < text.length; i++){
        if(text[i].offsetTop - this.innerHeight/1.75 < this.scrollY){
            text[i].classList.replace("text-fade", "text-fade-reveal");
        }
    }
}

//Text scrolls in from below 
textLoad = () => {
    let text = document.querySelectorAll(".text-load");
    for(i = 0; i < text.length; i++){
        setTimeout(function(){
            text[i].classList.replace("text-load", "text-load-reveal");
        }, 1000);
    }
}