const container = document.querySelector(".container");
const card = document.querySelector(".card");

const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".content h1");
const message = document.querySelector(".content h3");
const sizes = document.querySelector(".sizes");
const buy = document.querySelector(".buy button");

container.addEventListener("mousemove", (e) => {
  console.log(e.pageX);
  let xPosition = (window.innerWidth / 2 - e.pageX) / 10;
  let yPosition = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateX(${yPosition}deg)  rotateY(${xPosition}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  sneaker.style.transform = `translateZ(150px)`;
  sneaker.style.transform = `rotateZ(145deg)`;
  title.style.transform = `translateZ(150px)`;
  message.style.transform = `translateZ(150px)`;
  sizes.style.transform = `translateZ(150px)`;
  buy.style.transform = `translateZ(150px)`;
});

//mouse leave container
container.addEventListener("mouseleave", function () {
  // card.style.transform = 'none';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = "all ease 0.9s";

  sneaker.style.transform = `translateZ(0px)`;
  sneaker.style.transform = `rotateZ(0deg)`;
  title.style.transform = `translateZ(0px)`;
  message.style.transform = `translateZ(0px)`;
  sizes.style.transform = `translateZ(0px)`;
  buy.style.transform = `translateZ(0px)`;
});
