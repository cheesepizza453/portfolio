const prologSection = document.querySelector(".prolog_section");
const prologContainer = document.querySelector(".prolog_title_container");
const prologText = document.querySelectorAll(".title");
const prologText1 = document.getElementById("prolog_title1");
const prologText2 = document.getElementById("prolog_title2");
const prologText3 = document.getElementById("prolog_title3");
const prologBack = document.querySelector(".prolog_back");

// const bgWrapper = document.querySelector(".bg");
// const bg1 = document.querySelector(".bg1");
// const bg2 = document.querySelector(".bg2");
// const bg3 = document.querySelector(".bg3");
// const bg4 = document.querySelector(".bg4");

const prologStartScroll = prologSection.offsetTop;
const monitorHeight = window.innerHeight;
// bgWrapper.style.opacity = 1;
window.addEventListener("scroll", () => {
  if (window.scrollY >= prologSection.offsetTop && window.scrollY + monitorHeight < prologSection.offsetHeight) {
    prologBack.style.position = `fixed`;

    prologContainer.style.position = "fixed";
    prologContainer.style.top = "83%";
    prologContainer.style.left = "50%";
    prologContainer.style.transform = "translate(-50%, -50%)";

    // bgWrapper.style.position = `fixed`;
    // bg2.style.transform = `translateX(${-(window.scrollY / 13000) * 60}px)`;
    // bg3.style.transform = `translateX(${-(window.scrollY / 13000) * 110}px)`;
    // bg4.style.transform = `translateX(${-(window.scrollY / 13000) * 300}px)`;

    if (window.scrollY >= prologSection.offsetTop && window.scrollY < 2000) {
      prologText1.style.opacity = `${1 - window.scrollY / 2000}`;
      prologText2.style.opacity = "0";
      prologText3.style.opacity = "0";
    }
    if (window.scrollY >= 2000 && window.scrollY < 3000) {
      prologText1.style.opacity = "0";
      prologText2.style.opacity = `${(window.scrollY - 2000) / (3000 - 2000)}`;
      prologText3.style.opacity = "0";
    }
    if (window.scrollY >= 3000 && window.scrollY < 4000) {
      prologText1.style.opacity = "0";
      prologText2.style.opacity = `1`;
      prologText3.style.opacity = "0";
    }
    if (window.scrollY >= 4000 && window.scrollY < 6000) {
      prologText1.style.opacity = "0";
      prologText2.style.opacity = `${1 - (window.scrollY - 4000) / (6000 - 4000)}`;
      prologText3.style.opacity = "0";
    }
    if (window.scrollY >= 6000 && window.scrollY < 8000) {
      prologText1.style.opacity = "0";
      prologText2.style.opacity = "0";
      prologText3.style.opacity = `${(window.scrollY - 6000) / (8000 - 6000)}`;
    }
    if (window.scrollY >= 8000 && window.scrollY < 9000) {
      prologText1.style.opacity = "0";
      prologText2.style.opacity = "0";
      prologText3.style.opacity = `1`;
      prologBack.style.opacity = `1`;
    }
    if (window.scrollY >= 9000 && window.scrollY < 11000) {
      prologText1.style.opacity = "0";
      prologText2.style.opacity = "0";
      prologText3.style.opacity = `${1 - (window.scrollY - 9000) / (11000 - 9000 - monitorHeight)}`;
      prologBack.style.opacity = `${1 - (window.scrollY - 9000) / (11000 - 9000 - monitorHeight)}`;
    }
    if (window.scrollY >= 11000 && window.scrollY < prologSection.offsetHeight) {
      prologText1.style.opacity = "0";
    }
  } else {
    prologBack.style.position = `relative`;
    prologContainer.style.position = "relative";
    prologContainer.style.top = "initial";
    prologContainer.style.left = "initial";
    prologContainer.style.transform = `translate(0, ${window.scrollY})`;
  }
});
