const prologArea = document.querySelector(".prolog");

const gnbSection = document.querySelector(".gnb_container");
const gnbPath = document.querySelector(".path");
const gnbMenu1 = document.getElementById("gnb_menu_1");
const gnbMenu2 = document.getElementById("gnb_menu_2");
const gnbBg = document.querySelector(".gnb_bg");

function throttle(callback, delay) {
  let timeoutId;
  return function (...args) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        callback(...args);
        timeoutId = null;
      }, delay);
    }
  };
}

const throttledMouseMove = throttle((e) => {
  const x = e.clientX;
  const y = e.clientY;

  gnbPath.style.cssText = `left:${x - gnbPath.offsetWidth / 2}px; top:${y - gnbPath.offsetHeight / 2}px;`;
}, 16);

window.addEventListener("mousemove", throttledMouseMove);

const throttledMouseOverMenu1 = throttle(() => {
  gnbBg.classList.remove("menu2");
  gnbBg.classList.add("menu1");
}, 300);

const throttledMouseOverMenu2 = throttle(() => {
  gnbBg.classList.remove("menu1");
  gnbBg.classList.add("menu2");
}, 300);

gnbMenu1.addEventListener("mouseover", throttledMouseOverMenu1);
gnbMenu2.addEventListener("mouseover", throttledMouseOverMenu2);
