"use strict";
// THIS CODE CONTROLS THE NAVIGATION BAR

let hamburger = document.getElementById('hamburger');

let navigationContainer = document.getElementById('navigationContainer');
let close = document.getElementById('close');

let brandLogo = document.getElementById('brandLogo');


hamburger.addEventListener('click', function() {
  navigationContainer.style.display = 'block';
});

close.addEventListener('click', function() {
  navigationContainer.style.display = 'none';
})

/* NAVIGATION ENDS HERE */





/* THIS CODER HERE IS FOR THE SLIDER */

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





/* THIS CODE HERE IS FOR SERVICES HOVERING COLOURS */
/* THIS CODE HERE IS FOR SERVICES HOVERING COLOURS */



let serviceBox = document.querySelectorAll('.serviceBox');

const mouseoverFunc = e =>{
  console.log(this);
}

serviceBox.forEach(el => {
  el.addEventListener("mouseover",mouseoverFunc)
});
/*

for (let i = 0; i <= serviceBox.length - 1; i++) {
  boxes = serviceBox[i];

  boxes.addEventListener('mouseover', function() {
    let serviceHeading = this.querySelector('.serviceHeading');
    let serviceText = this.querySelector('.serviceText');
    let serviceReadMore = this.querySelector('.serviceReadMore');
    let serviceLink = this.querySelector('.serviceLink');
    let backgroundDrop = this.querySelector('.backgroundDrop');
    let serviceImg = this.querySelector('.serviceImg');


    serviceText.style.color = 'white';
    serviceText.style.transition = '0.5s';

    serviceHeading.style.color = 'white';
    serviceHeading.style.transition = '0.5s';

    serviceReadMore.style.backgroundColor = 'rgb(255, 201, 6)';

    serviceReadMore.style.transition = '0.5s';
    serviceReadMore.style.color = 'black';

    if (serviceImg.alt === 'webdev') {
      serviceImg.src = '/MEDIA-FOLDER/WEBDEV2.png';
      serviceImg.style.transition = '0.5s';
    } else if (serviceImg.alt === 'webdes') {
      serviceImg.src = '/MEDIA-FOLDER/WEBDESIGN2.png';
      serviceImg.style.transition = '0.5s';
    } else if (serviceImg.alt === 'network') {
      serviceImg.src = '/MEDIA-FOLDER/NETWORKING 1.png';
      serviceImg.style.transition = '0.5s';
    } else if (serviceImg.alt === 'graphic') {
      serviceImg.src = '/MEDIA-FOLDER/graphic design1.png';
      serviceImg.style.transition = '0.5s';
    } else if (serviceImg.alt === 'cyber') {
      serviceImg.src = '/MEDIA-FOLDER/CYBER SECURITY 1-1.png';
      serviceImg.style.transition = '0.5s';
    } else if (serviceImg.alt === 'video') {
      serviceImg.src = '/MEDIA-FOLDER/VIDEO ANIMATION 1.png';
      serviceImg.style.transition = '0.5s';
    }

  })



  boxes.addEventListener('mouseout', function() {
    let serviceHeading = this.querySelector('.serviceHeading');
    let serviceText = this.querySelector('.serviceText');
    let serviceReadMore = this.querySelector('.serviceReadMore');
    let serviceLink = this.querySelector('.serviceLink');
    let backgroundDrop = this.querySelector('.backgroundDrop');
    let serviceImg = this.querySelector('.serviceImg');


    serviceText.style.color = '';
    serviceText.style.transition = '';

    serviceHeading.style.color = '';
    serviceHeading.style.transition = '';

    serviceReadMore.style.backgroundColor = '';
    serviceReadMore.style.transition = '';
    serviceReadMore.style.color = '';


    if (serviceImg.alt === 'webdev') {
      serviceImg.src = '/MEDIA-FOLDER/WEBDEV1.png';
      serviceImg.style.transition = '0.5s';
    } else if (serviceImg.alt === 'webdes') {
      serviceImg.src = '/MEDIA-FOLDER/WEBDESIGN1.png';
      serviceImg.style.transition = '0.5s';
    } else if (serviceImg.alt === 'network') {
      serviceImg.src = '/MEDIA-FOLDER/NETWORKING 2.png';
      serviceImg.style.transition = '0.5s';
    } else if (serviceImg.alt === 'graphic') {
      serviceImg.src = '/MEDIA-FOLDER/graphicdesign2.png';
      serviceImg.style.transition = '0.5s';
    } else if (serviceImg.alt === 'cyber') {
      serviceImg.src = '/MEDIA-FOLDER/CYBER SECURITY 1.png';
      serviceImg.style.transition = '0.5s';
    } else if (serviceImg.alt === 'video') {
      serviceImg.src = '/MEDIA-FOLDER/VIDEO ANIMATION 2.png';
      serviceImg.style.transition = '0.5s';
    }

  })

}
*/
/* SERVICES CODES ENDS HERE */





/* THIS CODE HERE IS FOR TESTIMONIALS */

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






/* THIS CODE HERE IS FOR REVIEWS */


let customerNumber = document.querySelector(".customerNumber");
let businessNumber = document.querySelector(".businessNumber");
let clientsNumber = document.querySelector(".clientsNumber");
let reviewsNumber = document.querySelector(".reviewsNumber");
let customerinner = 0;

function add() {
  customerinner++;
}

counter1();
counter2();
counter3();
counter4();

function counter1() {

  let countdownId = setInterval(function run() {

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
  let countdownId2 = setInterval(function run2() {

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
  let countdownId3 = setInterval(function run3() {
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

  let countdownId4 = setInterval(function run4() {
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