const handleClick = (image, event) => {
	/*
		The purpose of this function is to change the image and styling of a 
		accordion item once the user clicks on it. 
		This is done by removing and adding the class .show and .bold-header depending
		on which event is clicked.

		Ideally this function would be declared and implemented in another 
		file then imported but I am relying on the golobally defined var
		allEvents to remove the styling onClick
	*/

	console.log("The event clicked:", event.path);

	//now we add the class .show that expands the accordion item
	let relevantChild;
	//turney operator used so if user clicks on the title of the event
	// no error will occur
	event.path[0].classList.contains("accordion-header")
		? (relevantChild = event.path[1].childNodes[3])
		: (relevantChild = event.path[0].childNodes[3]);

	relevantChild.classList.add("show");

	let header;
	event.path[0].classList.contains("accordion-header")
		? (header = event.path[0])
		: (header = event.path[0].childNodes[1]);
	// const header = event.path[0].childNodes[1];
	console.log(image);
	// change the image depending on the event
	if (header.id === "heading-Sydney") {
		image.src = "./images/vivid-sydney.jpg";
		image.alt = "Sydney opera house at night";
		//to bold the header when active
		header.classList.add("bold-header");
	} else if (header.id === "heading-Queens-bday") {
		image.src = "./images/queens-birthday-celebrations.jpg";
		image.alt = "Close-up of sparklers";
		header.classList.add("bold-header");
	} else if (header.id === "heading-Fathers-day") {
		image.src = "./images/fathers-day-dining.jpg";
		image.alt = "Close-up of clam chowder";
		header.classList.add("bold-header");
	}
};

export default handleClick;
