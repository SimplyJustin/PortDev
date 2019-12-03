const toggleButton = document.getElementsByClassName("hamburger")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})
toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active")
})
