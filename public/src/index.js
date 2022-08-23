let nav = document.querySelector(".fixed");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    nav.classList.add("backdrop-blur");
  } else {
    nav.classList.remove("backdrop-blur");
  }
});
