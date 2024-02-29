"use strict";
// element CODE CONTROLS THE NAVIGATION BAR

const hamburger = document.getElementById('hamburger');

const navigationContainer = document.getElementById('navigationContainer');
const close = document.getElementById('close');

const brandLogo = document.getElementById('brandLogo');
const serviceTextsColor = "#fff";
const transitionDuration = '0.5'; 

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
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
  updateSlider();
});

function updateSlider() {
  const translateValue = -currentIndex * 100 + '%';
  slider.style.transform = 'translateX(' + translateValue + ')';
}

/* SLIDER ENDS HERE */





/* element CODE HERE IS FOR SERVICES HOVERING COLOURS */
/* element CODE HERE IS FOR SERVICES HOVERING COLOURS */



const serviceContainer = document.querySelector('#serviceContainer');

const mouseOverFunc = event => {
  const targetElement = event.target;
  
  const selector = (element, className) => {
  return  element.querySelector(className);
  }
  
  if (targetElement.classList.contains("serviceBox")) {
    
    const serviceHeading = selector(targetElement, ".serviceHeading");
    const serviceText = selector(targetElement, '.serviceText');
    const serviceReadMore = selector(targetElement, '.serviceReadMore');
    const serviceLink = selector(targetElement, '.serviceLink');
    const backgroundDrop = selector(targetElement, '.backgroundDrop');
    const serviceImg = selector(targetElement, '.serviceImg');
   const serviceImgAlt = serviceImg.alt;

    serviceText.style.color = serviceTextsColor;
    serviceText.style.transition = transitionDuration;
    serviceHeading.style.color = serviceTextsColor;
    serviceHeading.style.transition = transitionDuration;

    serviceReadMore.style.backgroundColor = 'rgb(255, 201, 6)';

    serviceReadMore.style.transition = transitionDuration;
    serviceReadMore.style.color = 'black';
    
const changeImg = altValue => {
  serviceImg.src = `/MEDIA-FOLDER/serviceImgs/${altValue}2.png`;
}

changeImg(serviceImgAlt);
  }
}


serviceContainer.addEventListener("mouseover", mouseOverFunc)

/*
for (const i = 0; i <= serviceBox.length - 1; i++) {
  boxes = serviceBox[i];

  boxes.addEventListener('mouseover', function() {
    const serviceHeading = element.querySelector('.serviceHeading');
    const serviceText = element.querySelector('.serviceText');
    const serviceReadMore = element.querySelector('.serviceReadMore');
    const serviceLink = element.querySelector('.serviceLink');
    const backgroundDrop = element.querySelector('.backgroundDrop');
    const serviceImg = element.querySelector('.serviceImg');


    serviceText.style.color = serviceTextsColor;
    serviceText.style.transition = transitionDuration;

    serviceHeading.style.color = serviceTextsColor;
    serviceHeading.style.transition = transitionDuration;

    serviceReadMore.style.backgroundColor = 'rgb(255, 201, 6)';

    serviceReadMore.style.transition = transitionDuration;
    serviceReadMore.style.color = 'black';

    if (serviceImg.alt === 'webdev') {
      serviceImg.src = '/MEDIA-FOLDER/WEBDEV2.png';
      serviceImg.style.transition = transitionDuration;
    } 
    
    if (serviceImg.alt === 'webdes') {
      serviceImg.src = '/MEDIA-FOLDER/WEBDESIGN2.png';
      serviceImg.style.transition = transitionDuration;
    } 
    
    if (serviceImg.alt === 'network') {
      serviceImg.src = '/MEDIA-FOLDER/NETWORKING 1.png';
      serviceImg.style.transition = transitionDuration;
    } 
    
    if (serviceImg.alt === 'graphic') {
      serviceImg.src = '/MEDIA-FOLDER/graphic design1.png';
      serviceImg.style.transition = transitionDuration;
    } 
    
    if (serviceImg.alt === 'cyber') {
      serviceImg.src = '/MEDIA-FOLDER/CYBER SECURITY 1-1.png';
      serviceImg.style.transition = transitionDuration;
    } 
    
    if (serviceImg.alt === 'video') {
      serviceImg.src = '/MEDIA-FOLDER/VIDEO ANIMATION 1.png';
      serviceImg.style.transition = transitionDuration;
    }

  })



  boxes.addEventListener('mouseout', function() {
    const serviceHeading = element.querySelector('.serviceHeading');
    const serviceText = element.querySelector('.serviceText');
    const serviceReadMore = element.querySelector('.serviceReadMore');
    const serviceLink = element.querySelector('.serviceLink');
    const backgroundDrop = element.querySelector('.backgroundDrop');
    const serviceImg = element.querySelector('.serviceImg');


    serviceText.style.color = '';
    serviceText.style.transition = '';

    serviceHeading.style.color = '';
    serviceHeading.style.transition = '';

    serviceReadMore.style.backgroundColor = '';
    serviceReadMore.style.transition = '';
    serviceReadMore.style.color = '';


    if (serviceImg.alt === 'webdev') {
      serviceImg.src = '/MEDIA-FOLDER/WEBDEV1.png';
      serviceImg.style.transition = transitionDuration;
    } 
    
    if (serviceImg.alt === 'webdes') {
      serviceImg.src = '/MEDIA-FOLDER/WEBDESIGN1.png';
      serviceImg.style.transition = transitionDuration;
    } 
    
    if (serviceImg.alt === 'network') {
      serviceImg.src = '/MEDIA-FOLDER/NETWORKING 2.png';
      serviceImg.style.transition = transitionDuration;
    } 
    
    if (serviceImg.alt === 'graphic') {
      serviceImg.src = '/MEDIA-FOLDER/graphicdesign2.png';
      serviceImg.style.transition = transitionDuration;
    } 
    
    if (serviceImg.alt === 'cyber') {
      serviceImg.src = '/MEDIA-FOLDER/CYBER SECURITY 1.png';
      serviceImg.style.transition = transitionDuration;
    } 
    
    if (serviceImg.alt === 'video') {
      serviceImg.src = '/MEDIA-FOLDER/VIDEO ANIMATION 2.png';
      serviceImg.style.transition = transitionDuration;
    }

  })

}
*/
/* SERVICES CODES ENDS HERE */





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
  console.log(testimonialcurrentIndex);
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