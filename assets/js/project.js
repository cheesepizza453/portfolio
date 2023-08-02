const projectSection = document.querySelector(".projects_section");
const project = document.querySelector(".projects_container");
const projectInner = document.querySelector(".projects_inner");
const projectBg = document.querySelector(".projects_bg");
const leftBg = document.querySelector(".left_bg");
const rightBg = document.querySelector(".right_bg");
const j = document.querySelector(".j");

const projectArea = document.querySelector(".projects_area");
const projectList = document.querySelectorAll(".projects_list");
const porjectLine = document.querySelectorAll(".project_line");
const projectDetails = document.querySelectorAll(".project_details");
const projectItemBg = document.querySelector(".project_item_bg");
const projectDetailOpenBtn = document.querySelectorAll(".open_btn");
const projectName = document.querySelectorAll(".project_name");

// 프로젝트 리스트 hover 시 미리보기 영상 노출
function toggleClass(clickedElement) {
  for (let i = 0; i < projectList.length; i++) {
    const element = projectList[i];

    if (element === clickedElement) {
      projectItemBg.classList.add(`bg${i + 1}`);
    } else {
      projectItemBg.classList.remove(`bg${i + 1}`);
    }
  }
}
let projectAreaInMouse = true;

projectArea.addEventListener("mousemove", () => {
  projectAreaInMouse = true;
});
projectArea.addEventListener("mouseleave", () => {
  projectAreaInMouse = false;
});

for (let i = 0; i < projectList.length; i++) {
  const element = projectList[i];

  if (projectAreaInMouse) {
    element.addEventListener("mousemove", () => {
      toggleClass(element);
    });
  }
  element.addEventListener("mouseleave", () => {
    toggleClass(null);
  });
}

// 프로젝트 리스트 클릭 시 해당 상세보기 노출
function openDetailContents(clickedElement) {
  for (let i = 0; i < porjectLine.length; i++) {
    const element = porjectLine[i];
    const liElement = projectDetails[i];

    if (element === clickedElement) {
      if (!element.classList.contains("on")) {
        element.classList.add("on");
        liElement.classList.add("on");
      } else {
        element.classList.remove("on");
        liElement.classList.remove("on");
      }
    } else {
      element.classList.remove("on");
      liElement.classList.remove("on");
    }
  }
}

for (let i = 0; i < porjectLine.length; i++) {
  const element = porjectLine[i];

  element.addEventListener("click", () => {
    openDetailContents(element);
  });
}

window.addEventListener("scroll", () => {
  // j 스크롤에 따라 변화
  if (window.scrollY > 10) {
    if (j.offsetHeight < 5500) {
      j.style.height = `${Math.min(window.scrollY * 1.7, 2000)}px`;
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
    projectItemBg.style.opacity = `1`;

    leftBg.style.display = `block`;
    rightBg.style.display = `block`;
    leftBg.style.width = `${bgWidth}vw`;
    rightBg.style.width = `${bgWidth}vw`;
  } else if (window.scrollY >= projectSection.offsetHeight) {
    project.style.position = `fixed`;
    project.style.top = `0`;
    project.style.left = `0`;
    projectBg.style.position = `fixed`;
    projectBg.style.display = `initial`;
    projectItemBg.style.opacity = `1`;

    leftBg.style.display = `block`;
    rightBg.style.display = `block`;
    leftBg.style.width = `${bgWidth}vw`;
    rightBg.style.width = `${bgWidth}vw`;
  } else {
    project.style.position = `relative`;
    project.style.top = `initial`;
    project.style.left = `initial`;
    projectItemBg.style.opacity = `0`;

    projectBg.style.display = `none`;
    leftBg.style.display = `none`;
    rightBg.style.display = `none`;
    leftBg.style.width = `5px`;
    rightBg.style.width = `5px`;
  }

  if (window.scrollY >= 3500 && window.scrollY < projectSection.offsetHeight) {
    projectInner.classList.add("on");
  } else {
    projectInner.classList.remove("on");
  }
});
