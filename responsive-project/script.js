const toggle = document.querySelector(".toggle");
const navlist = document.querySelector(".navlist");

/* Toggle mobile menu */
function toggleNavList() {
    if (navlist.classList.contains("active"))
        {
          navlist.classList.remove("active");
        }
    else
        {
        navlist.classList.add("active");
        }
}

/* Event Listener */
toggle.addEventListener("click", toggleNavList, false);


const items = document.querySelectorAll(".item");

/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }
}
