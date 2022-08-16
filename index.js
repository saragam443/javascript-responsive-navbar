const toggleBtn = document.getElementById("toggle-btn")
const links = document.getElementById("links")

toggleBtn.addEventListener("click", () => {
    links.classList.toggle("show");
    toggleBtn.classList.toggle("btn-rotate");
})