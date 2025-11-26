const toggle = document.getElementById("toggle");
const items = document.getElementsByClassName("items")[0];

toggle.addEventListener("click", function() {
    items.classList.toggle("items");
})