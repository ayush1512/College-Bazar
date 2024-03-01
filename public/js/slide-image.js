const welcomeHeros = document.querySelector('.welcome-hero');

const imageArray = [
  '../images/welcome-hero/e1.jpg',
  '../images/welcome-hero/e2.jpg',
  '../images/welcome-hero/e3.jpg',
  '../images/welcome-hero/e4.jpg',
  '../images/welcome-hero/e5.jpg',
  '../images/welcome-hero/e6.jpg'
];

let currentIndex = 0;

function imageSlide() {
  currentIndex = (currentIndex + 1) % imageArray.length;
  welcomeHeros.style.backgroundImage = `url(${imageArray[currentIndex]})`;
}

setInterval(imageSlide, 3000);