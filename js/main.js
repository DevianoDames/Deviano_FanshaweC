//use css selector to make connections to elements with JavaScript
let theButton = document.querySelector("#buttonOne"),
	theHeading = document.querySelector("#headLine h1");
// step 3
//functionality always goes in the middle ---> how do we want
//the app to behave?
function changeBGImage () {
	// debugger;
	theHeading.textContent = "Super Awesome Drag and Drop Game"
	// start with the object, and then change a property
	//or run a method
	theHeading.classList.add('oragne-heading');
}

//step 2
//event handling always goes at the bottom =>
//how do we want users to interact with our app
theButton.addEventListener("click", changeBGImage);

