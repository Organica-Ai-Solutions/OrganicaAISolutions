 script.js

// Function to change the background color of the header randomly
function changeHeaderColor() {
    var colors = ["#FF5733", "#C70039", "#900C3F", "#581845"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var header = document.querySelector("header");
    header.style.backgroundColor = randomColor;
}

// Function to toggle a class on the main content when the button is clicked
function toggleMainContent() {
    var mainContent = document.querySelector(".main-content");
    mainContent.classList.toggle("expanded");
}

// Event listener to trigger changeHeaderColor function on header click
var header = document.querySelector("header");
header.addEventListener("click", changeHeaderColor);

// Event listener to trigger toggleMainContent function on button click
var button = document.querySelector(".button-container .button");
button.addEventListener("click", toggleMainContent);