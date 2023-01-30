//use css selector to make connections to elements with JavaScript

//create a 1 to 1 connection with a variable
//let theButton = document.querySelector("#buttonOne"),

//creat a 1 to many connection with a variable
let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1");
	puzzleBoard = document.querySelector (".puzzle-board");
// step 3
//functionality always goes in the middle ---> how do we want
//the app to behave?
function changeBGImage () {
	debugger;
	theHeading.textContent = "Super Awesome Drag and Drop Game"
	let theNewSource = "images/backGround" + this.id + "jpg";

	console.log(theNewSource)
	// start with the object, and then change a property
	//or run a method

}

//step 2
//event handling always goes at the bottom =>
//how do we want users to interact with our app

//1 to 1 event handling
//theButton.addEventListener("click", changeBGImage);

//1 to many even handling
theButtons.forEach(button => button.addEventListener("click",changeBGImage));

