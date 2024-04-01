"use strict";
// element CODE CONTROLS THE NAVIGATION BAR

// Selecting the needed elements
const close = document.getElementById('close');
const hamburger = document.getElementById('hamburger');
const navigationContainer = document.getElementById('navigationContainer');
const serviceContainer = document.querySelector('#serviceContainer');
const brandLogo = document.getElementById('brandLogo');
const slides = document.querySelectorAll('.testimonialslide');

// creating state variables
let serviceTextsColor = "#fff";
let transitionDuration = '0.5'; 
let imgNumb = 2;
let sliderCurrentIndex = 0;
const totalSlides = slides.length;



hamburger.addEventListener('click', function() {
  navigationContainer.classList.add("open");
});

close.addEventListener('click', function() {
  navigationContainer.classList.remove("open");
})

/* NAVIGATION ENDS HERE */

/* General function for the two sliders */
function showSlide(elementToSlide, index) {
  document.querySelector(elementToSlide).style.transform = `translateX(${-index * 100}%)`;
}


/* element CODER HERE IS FOR THE SLIDER */

const slider = document.querySelector('.slider');
const sliders = document.querySelectorAll(".slide");
const sliderPrevBtn = document.getElementById('prev');
const sliderNextBtn = document.getElementById('next');
const slideNextBtn = document.getElementById('reviewNextBtn');
const slidePrevBtn = document.getElementById('reviewPrevBtn');

const sliding = () => {

  sliders.forEach((slide, i) => {
    const transformVal = `translateX(${100 * (i - sliderCurrentIndex)}%)`;
    console.log(transformVal);
    slide.style.transform = transformVal;
    
  });
}

sliding();


sliderNextBtn.addEventListener('click', () => {
  sliderCurrentIndex = (sliderCurrentIndex + 1) % slider.children.length;
  showSlide(".slider", sliderCurrentIndex);
});

sliderPrevBtn.addEventListener('click', () => {
  sliderCurrentIndex = (sliderCurrentIndex - 1 + slider.children.length) % slider.children.length;
  showSlide(".slider", sliderCurrentIndex);
});

/* SLIDER ENDS HERE */


/* element CODE HERE IS FOR SERVICES HOVERING COLOURS */

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


slideNextBtn.addEventListener("click", () => {
  sliderCurrentIndex = (sliderCurrentIndex + 1) % totalSlides;
  showSlide(".testimonialslider", sliderCurrentIndex);
})

slidePrevBtn.addEventListener("click", ()=> {
  sliderCurrentIndex = (sliderCurrentIndex - 1 + totalSlides) % totalSlides;
  showSlide(".testimonialslider", sliderCurrentIndex);
})

/* TESTIMONIAL CODE ENDS HERE */






/* element CODE HERE IS FOR sliders */


const customerNumber = document.querySelector(".customerNumber");
const businessNumber = document.querySelector(".businessNumber");
const clientsNumber = document.querySelector(".clientsNumber");
const slidersNumber = document.querySelector(".slidersNumber");
let customerinner = 0;

function add() {
  customerinner++;
}

/*
counter1();
counter2();
counter3();
counter4();
*/
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
    slidersNumber.innerText = emeka;

    eme();

    if (slidersNumber.innerText === '5') {
      clearInterval(countdownId4);
      slidersNumber.innerText = 5;
    };
  }, 30)

  eme();
}





// Map rendering function

function renderMap(lat, long) {
  
  const myMap = L.map('map', {
    dragging: false,
    attributionControl: false,
    closePopupOnClick: false,
  }).setView([lat, long], 16);
  
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  L.marker([lat, long]).addTo(myMap)
    .bindPopup(`The physical location of <br> Handytech on the map`)
    .openPopup();
}
renderMap(52.508, 13.381);


//var map = L.map('map').setView([51.505, -0.09], 13);

/* TESTIMONIAL CODE ENDS HERE */