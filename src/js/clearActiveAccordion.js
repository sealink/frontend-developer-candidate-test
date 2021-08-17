const clearActiveAccordion = (allItems) => {
	allItems.forEach((element) => {
		// console.log("FIRSST", element.childNodes[1]);
		element.childNodes[1].classList.remove("bold-header");
		element.childNodes[3].classList.remove("show");
	});
};

export default clearActiveAccordion;
