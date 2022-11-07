const image1 = document.querySelector(".imageAnim1");
new simpleParallax(image1, {
  //AGRANDIR PERMET DE FAIRE DÉFILER UNE IMG ALORS QU'ELLE EST WIDTH 100% - OVERFLOW EST HIDDEN PAR DÉFAUT
  scale: 1.4,
  //L'ANIMATION CONTINUE PENDANT 500MS APRÈS LE SCROLL
  delay: 0.5,
  orientation: "left",
});

const image2 = document.querySelector(".imageAnim2");
new simpleParallax(image2, {
  scale: 1.8,
  delay: 0.5,
  orientation: "down",
});

const image3 = document.querySelector(".imageAnim3");
new simpleParallax(image3, {
  scale: 1.8,
  delay: 0.5,
  orientation: "up",
});

const image4 = document.querySelector(".imageAnim4");
new simpleParallax(image4, {
  scale: 1.4,
  delay: 0.5,
  orientation: "left",
});

const image5 = document.querySelector(".imageAnim5");
new simpleParallax(image5, {
  scale: 1.8,
  delay: 0.5,
  orientation: "left",
});

const image6 = document.querySelector(".imageAnim6");
new simpleParallax(image6, {
  scale: 1.4,
  delay: 0.5,
  orientation: "right",
});

