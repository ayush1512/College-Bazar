const welcomeHeros = document.querySelector('.welcome-hero');

const imageArray = [
  '../images/welcome-hero/pexels-gabriel-freytez-341523.jpg',
  '../images/welcome-hero/pexels-math-90946.jpg',
  '../images/welcome-hero/microphone.jpg'
];

let currentIndex = 0;

function imageSlide() {
  currentIndex = (currentIndex + 1) % imageArray.length;
  welcomeHeros.style.backgroundImage = `url(${imageArray[currentIndex]})`;
}

setInterval(imageSlide, 3000);