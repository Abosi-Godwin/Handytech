"use strict";
// element CODE CONTROLS THE NAVIGATION BAR

const hamburger = document.getElementById('hamburger');

const navigationContainer = document.getElementById('navigationContainer');
const close = document.getElementById('close');

const brandLogo = document.getElementById('brandLogo');
let serviceTextsColor = "#fff";
let transitionDuration = '0.5'; 
let imgNumb = 2;
hamburger.addEventListener('click', function() {
  navigationContainer.style.display = 'block';
});

close.addEventListener('click', function() {
  navigationContainer.style.display = 'none';
})

/* NAVIGATION ENDS HERE */





/* element CODER HERE IS FOR THE SLIDER */

const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slider.children.length;
  console.log(currentIndex)
  updateSlider(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (0 - 1 + slider.children.length) % slider.children.length;
  updateSlider();
});

function updateSlider(index) {
  const translateValue = `${-index * 100}%`;
  slider.style.transform = `translateX(${translateValue})`;
}

/* SLIDER ENDS HERE */





/* element CODE HERE IS FOR SERVICES HOVERING COLOURS */
/* element CODE HERE IS FOR SERVICES HOVERING COLOURS */



const serviceContainer = document.querySelector('#serviceContainer');

const mouseHoverFunc = (event, funcObj) => {
  
  const targetElement = event.target;
  const {color,transitionDur,imgNum,btnBg} = funcObj;
  
  const selector = (element, className) => {
  return  element.querySelector(className);
  }
  
  const colorElemenets = element => {
    
    if (element.classList.contains('serviceReadMore')) {
      element.style.transition = transitionDur;
      element.style.backgroundColor = btnBg;
    }
    element.style.color = color;
    element.style.transition = transitionDur;
    
  }
  
  if (targetElement.classList.contains("serviceBox")) {
  
    colorElemenets(selector(targetElement, ".serviceHeading"));
    colorElemenets(selector(targetElement, ".serviceText"));
    colorElemenets(selector(targetElement, ".serviceReadMore"));
    
    const serviceImg = selector(targetElement, '.serviceImg');
   
const changeImg = altValue => {
  serviceImg.src = `/MEDIA-FOLDER/serviceImgs/${altValue}${imgNum}.png`;
  
}

changeImg(serviceImg.alt);
  }
  
  
  
}

serviceContainer.addEventListener("mouseover", target => {
  const tools = {
    transitionDur: transitionDuration,
    color: serviceTextsColor,
    imgNum: imgNumb,
    btnBg: "#F89E00",
  }
  mouseHoverFunc(target,tools);
});

serviceContainer.addEventListener("mouseout", target =>{
  
  const tools = {
    transitionDur: "",
    color: "",
    imgNum: 1,
    btnBg: "",
  }
  mouseHoverFunc(target,tools);
});





/* element CODE HERE IS FOR TESTIMONIALS */

let testimonialcurrentIndex = 0;
const slides = document.querySelectorAll('.testimonialslide');
const totalSlides = slides.length;

function showSlide(index) {
  const newPosition = -index * 100 + '%';
  document.querySelector('.testimonialslider').style.transform = 'translateX(' + newPosition + ')';
}

function nextSlide() {
  testimonialcurrentIndex = (testimonialcurrentIndex + 1) % totalSlides;
  showSlide(testimonialcurrentIndex);
}

function prevSlide() {
  testimonialcurrentIndex = (testimonialcurrentIndex - 1 + totalSlides) % totalSlides;
  showSlide(testimonialcurrentIndex);
}

/* TESTIMONIAL CODE ENDS HERE */






/* element CODE HERE IS FOR REVIEWS */


const customerNumber = document.querySelector(".customerNumber");
const businessNumber = document.querySelector(".businessNumber");
const clientsNumber = document.querySelector(".clientsNumber");
const reviewsNumber = document.querySelector(".reviewsNumber");
let customerinner = 0;

function add() {
  customerinner++;
}

counter1();
counter2();
counter3();
counter4();

function counter1() {

  const countdownId = setInterval(function run() {

    customerNumber.innerText = customerinner;
    add();

    if (customerNumber.innerText === '99') {
      clearInterval(countdownId);
      customerNumber.innerText = 99
    };
  }, 30);

  add();

}

function counter2() {
  const countdownId2 = setInterval(function run2() {

    businessNumber.innerText = customerinner;
    add();

    if (businessNumber.innerText === '25') {
      clearInterval(countdownId2);
      businessNumber.innerText = 25;
    };
  }, 30);

  add();
}



function counter3() {
  const countdownId3 = setInterval(function run3() {
    clientsNumber.innerText = customerinner;

    add();

    if (clientsNumber.innerText === '120') {
      clearInterval(countdownId3);
      clientsNumber.innerText = 120;
    }
  }, 30)

  add();
}





function counter4() {

  let emeka = 0

  function eme() {
    emeka++
  }

  const countdownId4 = setInterval(function run4() {
    reviewsNumber.innerText = emeka;

    eme();

    if (reviewsNumber.innerText === '5') {
      clearInterval(countdownId4);
      reviewsNumber.innerText = 5;
    };
  }, 30)

  eme();
}






/* TESTIMONIAL CODE ENDS HERE */