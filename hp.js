const menuRight = document.querySelector(".menu-right");

// kalo diklik
document.querySelector("#e-logo").onclick = () => {
  menuRight.classList.toggle("active");
};

// klik luar tugel
let luar = document.querySelector("#e-logo");

document.addEventListener("click", function (e) {
  if (!luar.contains(e.target) && !menuRight.contains(e.target)) {
    menuRight.classList.remove("active");
  }
});

//klik exxx
document.querySelector("#tag").onclick = () => {
  menuRight.classList.remove("active");
};
