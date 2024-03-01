/*
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); 
}

showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}
*/



let imageCard1 = document.getElementById("slide-1");
let imageCard2 = document.getElementById("slide-2");
let imageCard3 = document.getElementById("slide-3");
let imageCard4 = document.getElementById("slide-4");
let imageCard5 = document.getElementById("slide-5");
let imageCard6 = document.getElementById("slide-6");


function myEventHandler() {
  document.addEventListener("scroll", (event) => {
    let positionY = window.scrollY;
  
  
    imageCard1.style.transform = `translateY(${
      positionY * -0.3 + 50
    }px)`;
  
    imageCard2.style.transform = `translateY(${
      positionY * 0.1 + -50
    }px)`;
  
    imageCard3.style.transform = `translateY(${
      positionY * -0.2 + 10
    }px)`;
  
    imageCard4.style.transform = `translateY(${
      positionY * -0.3 + 50
    }px)`;
  
    imageCard5.style.transform = `translateY(${
      positionY * 0.1 + -50
    }px)`;
  
  
    imageCard6.style.transform = `translateY(${
      positionY * -0.2 + 10
    }px)`;
  
    let newOpacity = positionY * 0.001;
    if (newOpacity >= 0 && newOpacity <= 1) {
      imageCard1.style.opacity = newOpacity;
      imageCard2.style.opacity = newOpacity;
      imageCard3.style.opacity = newOpacity;
      imageCard4.style.opacity = newOpacity;
      imageCard5.style.opacity = newOpacity;
      imageCard6.style.opacity = newOpacity;
    }
  });
}




function handleScreenSize() {
  if (window.innerWidth > 1460) { 
    window.addEventListener('resize', myEventHandler);
    myEventHandler(); 
  } else {
    window.removeEventListener('resize', myEventHandler);
  }
}

handleScreenSize();

window.addEventListener('resize', handleScreenSize);


