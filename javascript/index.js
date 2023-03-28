//variable to select the class of hamburger button and the navigation menu 
const hamburger = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".nav-menu");

//if the hamburger button is clicked toggles the "active" class on both the element with the ID "hamburger" and the element with the class "navMenu"
// when the element with the ID "hamburger" is clicked, the appearance of both the hamburger icon and the navigation menu will be toggled, which typically allows the user to show and hide the navigation menu by clicking the hamburger icon.

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

//This code selects all elements on the page that have a class of "nav-link"
//This code removes the "active" class from both the element with the ID "hamburger" and the element with the class "navMenu". 
//This ensures that if a user clicks on one of the navigation links within the menu, 
//the menu will be hidden again, as the "active" class will be removed from both the hamburger icon and the navigation menu.
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))