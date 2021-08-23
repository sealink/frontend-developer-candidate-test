// Add your custom JavaScript here
//get element
const sydney = document.getElementById("sydney");
const queen = document.getElementById("queen");
const father = document.getElementById("father");
const image = document.querySelector(".image");

//change size and weight
function fontSize(btn, btn2, btn3) {
  console.log(btn.getAttribute("aria-expanded"));
  if (btn.getAttribute("aria-expanded") === "true") {
    btn.querySelector(".accordion-place").style.fontSize = "25px";
    btn.querySelector(".accordion-place").style.fontWeight = "bold";
    btn2.querySelector(".accordion-place").style.fontSize = "22px";
    btn2.querySelector(".accordion-place").style.fontWeight = "normal";
    btn3.querySelector(".accordion-place").style.fontSize = "22px";
    btn3.querySelector(".accordion-place").style.fontWeight = "normal";
  } else {
    btn.querySelector(".accordion-place").style.fontSize = "22px";
    btn.querySelector(".accordion-place").style.fontWeight = "normal";
  }
}

//change images
sydney.onclick = () => {
  image.src = "images/vivid-sydney.jpg";
  fontSize(sydney, queen, father);
};

queen.onclick = () => {
  image.src = "images/queens-birthday-celebrations.jpg";
  fontSize(queen, sydney, father);
};

father.onclick = () => {
  image.src = "images/fathers-day-dining.jpg";
  fontSize(father, sydney, queen);
};
