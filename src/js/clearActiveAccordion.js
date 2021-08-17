const clearActiveAccordion = (allItems) => {
	/*
        The purpose of this function is to remove all active accordion-items 
        so that when a user clicks on a different accordion item, only that 
        description will appear 

        It takes a nodeList of DOM elements(allItems) which are modified by 
        this function
    */
	allItems.forEach((element) => {
		element.childNodes[1].classList.remove("bold-header");
		element.childNodes[3].classList.remove("show");
	});
};

export default clearActiveAccordion;
