// Add your custom JavaScript here
// console.log("test");


// Declare variables with query selector
const images = document.querySelector('.desktop');
const accordionOne = document.querySelector('#one');
const accordionTwo = document.querySelector('#two');
const accordionThree = document.querySelector('#three');


// Set the functions
// Change image src depending on the query selector (accordion button)
const ShowImageOne = () => {
  console.log('accordion 1 clicked');
  images.src = "images/vivid-sydney.jpg";
};

const ShowImageTwo = () => {
  console.log('accordion 2 clicked');     
  images.src = "images/queens-birthday-celebrations.jpg";
};

const ShowImageThree = () => {
  console.log('accordion 3 clicked');   
  images.src = "images/fathers-day-dining.jpg";
};

// Call the functions
accordionOne.addEventListener('click', ShowImageOne);
accordionTwo.addEventListener('click', ShowImageTwo);
accordionThree.addEventListener('click', ShowImageThree);