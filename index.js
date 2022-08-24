// Sticky Navbar
window.onscroll = () => {
    add_sticky();
};

// Get Navbar Element
// let navbar = document.querySelector(".header-wrap");
let navbar = document.getElementById("navbar");

// Offset position
let sticky = navbar.offsetTop;

console.log(sticky);

// Create add Sticky
function add_sticky() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
