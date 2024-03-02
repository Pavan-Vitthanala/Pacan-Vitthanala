
let imageCard1 = document.getElementById("slide-1");
let imageCard2 = document.getElementById("slide-2");
let imageCard3 = document.getElementById("slide-3");
let imageCard4 = document.getElementById("slide-4");
let imageCard5 = document.getElementById("slide-5");
let imageCard6 = document.getElementById("slide-6");


function myEventHandlerLarge() {
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

function myEventHandlerMedium() {
  document.addEventListener("scroll", (event) => {
    let positionY = window.scrollY;
  
  
    imageCard1.style.transform = `translateY(${
      positionY * -0.3 + 350
    }px)`;
  
    imageCard2.style.transform = `translateY(${
      positionY * 0.1 + -50
    }px)`;
  
    imageCard3.style.transform = `translateY(${
      positionY * -0.3 + 350
    }px)`;
  
    imageCard4.style.transform = `translateY(${
      positionY * 0.1 + -50
    }px)`;
  
    imageCard5.style.transform = `translateY(${
      positionY * -0.3 + 350
    }px)`;
  
  
    imageCard6.style.transform = `translateY(${
      positionY * 0.1 + -50
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
  if (window.innerWidth > 1515) { 
    window.addEventListener('resize', myEventHandlerLarge);
    myEventHandlerLarge(); 
  } else if (window.innerWidth <= 1515 && window.innerWidth > 1015) {
    window.addEventListener('resize', myEventHandlerMedium);
    myEventHandlerMedium();
  } else {
    window.removeEventListener('resize', myEventHandlerLarge, myEventHandlerMedium);
  }
}

handleScreenSize();

window.addEventListener('resize', handleScreenSize);



    let toggleBox = document.querySelector(".toggle-box");
    let circle = document.querySelector(".circle");
    let checkbox = document.getElementById("checkbox");

    toggleBox.onclick = function(){
        if(checkbox.checked){
            circle.style.transform = "translateX(25px)";
            circle.style.backgroundColor = "#fff";
            toggleBox.style.backgroundColor = "#000";
            document.body.classList.toggle('dark-mode');
        }else{
            circle.style.transform = "translateX(0px)";
            circle.style.backgroundColor = "#000";
            toggleBox.style.backgroundColor = "#fff";
        }
    }
