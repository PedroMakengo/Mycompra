// Calcular o tamanho do body
const downLink = document.querySelector("#down-link");

function myScroll() {
  const windowTop = window.pageYOffset;
  if (windowTop > 461) {
    downLink.style.display = "none";
    downLink.style.transition = "ease 1s";
  } else {
    downLink.style.display = "block";
    downLink.style.transition = "ease 1s";
  }
}

window.addEventListener("scroll", function () {
  myScroll();
});
