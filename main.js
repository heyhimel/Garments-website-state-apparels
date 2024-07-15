
// hambarger
(function() {

    'use strict';
    
    document.querySelector('.material-design-hamburger__icon').addEventListener(
      'click',
      function() {      
        var child;
        
        document.body.classList.toggle('background--blur');
        this.parentNode.nextElementSibling.classList.toggle('menu--on');
    
        child = this.childNodes[1].classList;
    
        if (child.contains('material-design-hamburger__icon--to-arrow')) {
          child.remove('material-design-hamburger__icon--to-arrow');
          child.add('material-design-hamburger__icon--from-arrow');
        } else {
          child.remove('material-design-hamburger__icon--from-arrow');
          child.add('material-design-hamburger__icon--to-arrow');
        }
    
      });
    
    })();

    // working procedure page, dynamic adjust main section postion according to header

    function adjustContentPosition() {
      let header = document.getElementById('header');
      let content = document.getElementById('main');
      let headerHeight = header.offsetHeight;
      content.style.marginTop = headerHeight + 'px';
  }

  window.addEventListener('resize', adjustContentPosition);
  window.addEventListener('load', adjustContentPosition);

  //working procedure page, slider section

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
  
}

// what we do page slider section
// slider1

let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function showSlides1(n) {
  let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  if (n > slides1.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  
  slides1[slideIndex1-1].style.display = "block";  
  
}

// slider2

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  
  slides2[slideIndex2-1].style.display = "block";  
  
}

// collapse, subpage5
function minusicon(n){
  let btn = document.getElementById("btn"+n);
  if(btn.innerHTML=="-")
  {
    btn.innerHTML = "+";
  }
  else
  {
    btn.innerHTML = "-";
  }
}