const hiSection = document.querySelector(".hi_section");
const hiContainer = document.querySelector(".hi_container");
const hiArea = document.querySelector(".hi_area");
const changeNameText = document.getElementById("change_name");

const introduceSection = document.querySelector(".introduce_section");
const introduceContainer = document.querySelector(".introduce_container");
const introduceArea = document.querySelector(".introduce_area");

const monitorHeight = window.innerHeight;

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// 이름 바뀌는 모션
const names = ["김미리", "김DlZl", "김D121", "김미리", "김miri", "김mizl", "김D12!"];
let currentIndex = 0;

function changeText() {
  changeNameText.textContent = names[currentIndex];
  currentIndex = (currentIndex + 1) % names.length;
}
setInterval(changeText, 200);

window.addEventListener("scroll", () => {
  // 인사
  // 스크롤이 오프셋탑보다 작으면 포지션 렐러티브 , translate 0
  // 위에서 내려오면서 스크롤이 오프셋탑보다 커질 때 : 포지션 픽스드로 바뀜,
  // 스크롤이 오프셋탑보다 크고 오프셋 하이츠보다 작을 때 포지션 픽스드
  // 스크롤이 오프셋 하이츠보다 클 때 포지션 렐러티브 translate Y
  if (
    window.scrollY > hiSection.offsetTop &&
    window.scrollY + window.innerHeight < hiSection.offsetTop + hiSection.offsetHeight
  ) {
    hiContainer.style.position = `fixed`;
    hiContainer.style.top = "50%";
    hiContainer.style.left = "50%";
    hiContainer.style.transform = `translate(-50%, -50%)`;
  } else if (window.scrollY + window.innerHeight >= hiSection.offsetTop + hiSection.offsetHeight) {
    hiContainer.style.position = `relative`;
    hiContainer.style.top = "initial";
    hiContainer.style.left = "initial";
    hiContainer.style.transform = `translate(0,${hiContainer.offsetTop + hiSection.offsetTop}px)`;
  } else {
    hiContainer.style.position = `relative`;
    hiContainer.style.top = "initial";
    hiContainer.style.left = "initial";
    hiContainer.style.transform = `translate(0,${0}px)`;
  }

  // 소개영역
  console.log(window.scrollY, introduceSection.offsetTop, introduceSection.offsetTop + introduceSection.offsetHeight);
  if (
    window.scrollY > introduceSection.offsetTop &&
    window.scrollY + window.innerHeight < introduceSection.offsetTop + introduceSection.offsetHeight
  ) {
    introduceContainer.classList.add("on");
    introduceContainer.style.position = "fixed";
    introduceContainer.style.top = "0";
    introduceContainer.style.left = "0";
  } else if (window.scrollY + window.innerHeight >= introduceSection.offsetTop + introduceSection.offsetHeight) {
    introduceContainer.classList.remove("on");
    introduceContainer.style.postion = "relative";
    introduceContainer.style.top = "initial";
    introduceContainer.style.left = "intial";
  } else {
    introduceContainer.classList.remove("on");
    introduceContainer.style.position = `relative`;
    introduceContainer.style.top = "initial";
    introduceContainer.style.left = "initial";
  }
});
