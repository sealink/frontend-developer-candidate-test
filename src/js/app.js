// Add your custom JavaScript here

import handleClick from "./handleClick";
import clearActiveAccordion from "./clearActiveAccordion";

const image = document.getElementById("eventImage");
const allEvents = document.querySelectorAll(".accordion-item");

console.log("number1", allEvents);

// add event listener that gives the accordion its functionality
allEvents.forEach((element) => {
	console.log("The eventListener Obj:", element);
	element.addEventListener("click", (e) => {
		clearActiveAccordion(allEvents);
		handleClick(image, e);
	});
});
