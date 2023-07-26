const prologArea = document.querySelector(".prolog");

const gnbSection = document.querySelector(".gnb_container");
const gnbPath = document.querySelector(".path");
const gnbMenu1 = document.getElementById("gnb_menu_1");
const gnbMenu2 = document.getElementById("gnb_menu_2");
const gnbBg = document.querySelector(".gnb_bg");

setTimeout(() => {
  prologArea.classList.add("out");
}, 2000);

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  gnbPath.style.left = `${x - gnbPath.offsetWidth / 2}px`;
  gnbPath.style.top = `${y - gnbPath.offsetHeight / 2}px`;
});

gnbMenu1.addEventListener("mouseover", () => {
  gnbBg.classList.remove("menu2");
  gnbBg.classList.add("menu1");
});

gnbMenu2.addEventListener("mouseover", () => {
  gnbBg.classList.remove("menu1");
  gnbBg.classList.add("menu2");
});
