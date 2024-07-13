
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
      const header = document.getElementById('header');
      const content = document.getElementById('main');
      const headerHeight = header.offsetHeight;
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
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
  
}