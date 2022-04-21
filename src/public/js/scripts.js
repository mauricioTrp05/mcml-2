/*!
* Start Bootstrap - Landing Page v6.0.5 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function reveal() {
    var ins = document.querySelectorAll(".INS");
    var tni = document.querySelectorAll(".TNI");
    var tnd = document.querySelectorAll(".TND");
  
    for (var i = 0; i < ins.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = ins[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        ins[i].classList.add("active","animate__animated","animate__bounce");
        
      } else {
        ins[i].classList.remove("active", "animate__animated","animate__bounce");    
      }
    }

    for (var i = 0; i < tni.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = tni[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        tni[i].classList.add("active","animate__animated","animate__backInLeft");
        
      } else {
        tni[i].classList.remove("active", "animate__animated","animate__backInLeft");    
      }
    }

    for (var i = 0; i < tnd.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = tnd[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        tnd[i].classList.add("active","animate__animated","animate__backInRight");
        
      } else {
        tnd[i].classList.remove("active", "animate__animated","animate__backInRight");    
      }
    }
  }
  
  window.addEventListener("scroll", reveal);