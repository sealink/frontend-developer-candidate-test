document.addEventListener('DOMContentLoaded', () => {
  const headings = document.querySelectorAll('.card-header');
  const headingTexts = document.querySelectorAll('.headingText');
  const whatsonImg = document.getElementById("whatsonImg");
  headingTexts[0].style.fontWeight = "700";
  for (let i = 0; i < headings.length; i++) {
    const currentHeading = headings[i];
    currentHeading.addEventListener('click', function() {
      // makes all headingTexts fontWeight as default (400)
      for (let i = 0; i < headingTexts.length; i++) {
        headingTexts[i].style.fontWeight = "400";
      }
      // changes Img to relevant image & alt
      whatsonImg.src = currentHeading.getAttribute("data-img-src"); 
      whatsonImg.alt = currentHeading.getAttribute("data-img-alt");
      // makes clicked headerText fontWeight as 700
      const currentHeadingText = currentHeading.getElementsByTagName("h4");
      currentHeadingText[0].style.fontWeight = "700";
      // open when it is opened
      const currentHeadingStatus = currentHeading.getElementsByTagName("button");
      const currentSibling = currentHeading.nextElementSibling;
      if (currentHeadingStatus[0].getAttribute("aria-expanded") == "true") {
        currentHeadingStatus[0].setAttribute("aria-expanded", "true");
        currentSibling.classList.add("show");
      } 
    });
  }
});

