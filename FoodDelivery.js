var slideIndex=1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slides=document.getElementsByClassName("myslides");
    var dots=document.getElementsByClassName("dot");
    if(n > slides.length){
        slideIndex=1
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

var slideIndex2=1;
showSlides2(slideIndex2);
function plusSlider2(n){
    showSlides2(slideIndex2 += n);
}
function currentSlide2(n){
    showSlides2(slideIndex2 = n);
}
function showSlides2(n){
    var j;
    var slides2=document.getElementsByClassName("myslide2");
    var dots2=document.getElementsByClassName("dot2");
    if(n > slides2.length){
        slideIndex2=1
    }
    if(n < 1){
        slideIndex2 = slides2.length
    }
    for(j=0; j<slides2.length; j++){
        slides2[j].style.display="none";
    }
    for(j=0; j<dots2.length; j++){
        dots2[j].className=dots2[j].className.replace(" active","");
    }
    slides2[slideIndex2-1].style.display="block";
    dots2[slideIndex2-1].className += " active";
}
/*
var slideIndex2=0;
showSlides2();
function showSlides2(){
    var j;
    var slides2=document.getElementsByClassName("myslide2");
    for(j=0; j<slides2.length; j++){
        slides2[j].style.display="none";
    }
    slideIndex2++;
    if(slideIndex2 > slides2.length){
        slideIndex2=1
    }
    slides2[slideIndex2-1].style.display="block";
    setTimeout(showSlides2, 2000);
}
*/
