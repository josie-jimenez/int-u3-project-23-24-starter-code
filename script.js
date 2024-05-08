// Declare variables below to save the different divs of your story.

let storyOpening = document.querySelector(".story-opening");
let optionOneScreen = document.querySelector(".option-one-screen");
 let optionOneButton = document.querySelector(".option-one");
let optionTwoEnd = document.querySelector(".option-two-end");
let optionOneEnd = document.querySelector(".option-one-end")
optionOneButton.addEventListener('click', function() {
  storyOpening.style.display = "none";
  optionOneScreen.style.display = "block";
  optionTwoEnd.style.display = "none";
  optionOneEnd.style.display = "block";
  optionTwoScreen.style.display = "none";

});
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionTwoButton = document.querySelector(".option-two");
optionTwoButton.addEventListener('click', function() {
storyOpening.style.display = "none";
optionOneScreen.style.display = "none";
optionOneEnd.style.display = "none";
optionTwoScreen.style.display = "block"
  optionTwoEnd.style.display = "block";
});
// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.



button1.addEventListener('click', function(){
 
});

button2.addEventListener('click', function(){

});