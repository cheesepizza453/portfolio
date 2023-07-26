const projectSection = document.querySelector(".projects_section");
const project = document.querySelector(".projects_container");
const projectUl = document.querySelector(".project_ul");
const projectBg = document.querySelector(".projects_bg");
const leftBg = document.querySelector(".left_bg");
const rightBg = document.querySelector(".right_bg");
const j = document.querySelector(".j");

window.addEventListener("scroll", () => {
  // j 스크롤에 따라 변화
  if (window.scrollY > 10) {
    if (j.offsetHeight < 20000) {
      j.style.height = `${window.scrollY * 1.4}px`;
    }
  }
  if (window.scrollY > 10 && window.scrollY < 100) {
    j.style.height = `160px`;
    j.style.transform = `scaleX(1)`;
  }

  if (window.scrollY >= projectSection.offsetTop && window.scrollY < projectSection.offsetHeight) {
    const bgWidth =
      ((window.scrollY - projectSection.offsetTop) / (projectSection.offsetHeight - projectSection.offsetTop)) * 200;

    project.style.position = `fixed`;
    project.style.top = `0`;
    project.style.left = `0`;
    projectBg.style.position = `fixed`;
    projectBg.style.display = `initial`;

    leftBg.style.display = `block`;
    rightBg.style.display = `block`;
    leftBg.style.width = `${bgWidth}vw`;
    rightBg.style.width = `${bgWidth}vw`;
  } else {
    project.style.position = `relative`;
    project.style.top = `initial`;
    project.style.left = `initial`;

    projectBg.style.display = `none`;
    leftBg.style.display = `none`;
    rightBg.style.display = `none`;
    leftBg.style.width = `5px`;
    rightBg.style.width = `5px`;
  }
  console.log(window.scrollY);
  if (window.scrollY >= 6000 && window.scrollY < projectSection.offsetHeight) {
    projectUl.classList.add("on");
  } else {
    projectUl.classList.remove("on");
  }
});
