const selectedDesc = document.querySelector(".selected_desc");
const selsctedTitle = document.querySelector(".selected_title");
const stackSection = document.querySelector(".tech_stack_section");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const cw = window.innerWidth * 0.6;
const ch = window.innerHeight * 0.5;

window.addEventListener("resize", () => {
  cw = window.innerWidth * 0.6;
  ch = window.innerHeight * 0.5;
});

ctx.fillStyle = "0xe8e8e8";
ctx.fillRect(0, 0, cw, ch);

window.addEventListener("scroll", () => {
  if (window.scrollY == stackSection.offsetTop) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    initScene();
    initMouse();
    initGround();
    initImageBoxes();
  }
});

let engine, render, runner, mouse, mouseConstraint;

const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Events = Matter.Events;

initScene();
initMouse();
initGround();
initImageBoxes();

const data = {
  JS: {
    title: "JavsScript",
    desc: "자바스크립트에 대해 기본적인 이해를 하고 있습니다. 초급 수준의 모션 제작이 가능합니다.",
  },
  REACT: { title: "React", desc: "컴포넌트를 나누고 데이터를 받아와 작업할 수 있습니다." },
  CSS: { title: "CSS", desc: "모션에 관심이 많고 반응형 구현이 가능합니다." },
  HTML: { title: "HTML", desc: "접근성을 생각하며 HTML을 작성합니다." },
  TAILWIND: { title: "TailWind", desc: "리액트에서 환경 세팅 및 테일윈드 사용이 가능합니다." },
  REDUX: { title: "Redux Toolkit", desc: "리액트에서 환경 세팅 및 기본적인 사용이 가능합니다." },
  STYLED: { title: "Styled Components", desc: "리액트에서 환경 세팅 및 기본적인 사용이 가능합니다." },
};

Events.on(mouseConstraint, "mousedown", () => {
  let selected = data["JS"];
  const newSelected = mouseConstraint.body && mouseConstraint.body.label;

  if (newSelected) {
    selected.data = data[`${newSelected}`];
  }
  selsctedTitle.textContent = selected.data.title;
  selectedDesc.textContent = selected.data.desc;
});

function initScene() {
  engine = Engine.create();
  render = Render.create({
    canvas: canvas,
    engine: engine,
    options: {
      width: cw,
      height: ch,
      wireframes: false,
      background: 0x00000,
    },
  });

  runner = Runner.create();

  Render.run(render);
  Runner.run(runner, engine);
}

function initMouse() {
  mouse = Mouse.create(canvas);
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

  Composite.add(engine.world, [mouseConstraint]);
}

function initGround() {
  const walls = [
    Bodies.rectangle(cw / 2, ch, cw, 150, { isStatic: true, render: { visible: false } }),
    Bodies.rectangle(cw / 2, 0, cw, 150, { isStatic: true, render: { visible: false } }),
    Bodies.rectangle(cw / 2, ch, cw, 150, { isStatic: true, render: { visible: false } }),
    Bodies.rectangle(0, ch / 2, 150, ch, { isStatic: true, render: { visible: false } }),
    Bodies.rectangle(cw, ch / 2, 150, ch, { isStatic: true, render: { visible: false } }),
  ];
  Composite.add(engine.world, walls);
}

function addRect(x, y, w, h, options = {}) {
  const rect = Bodies.rectangle(x, y, w, h, options);
  Composite.add(engine.world, rect);
}

function initImageBoxes() {
  for (let i = 0; i < 7; i++) {
    const jsWH = Math.floor(Math.random() * cw * (Math.random() * i * 2) + cw * 0.1);
    const cssWH = Math.floor(Math.random() * cw * (Math.random() * i * 2) + cw * 0.15);
    const htmlWH = Math.floor(Math.random() * cw * (Math.random() * i * 1.4) + cw * 0.35);
    const reactWH = Math.floor(Math.random() * cw * (Math.random() * i * 3) + cw * 0.15);
    const tailWH = Math.floor(Math.random() * cw * (Math.random() * i * 4) + cw * 0.15);
    const reduxWH = Math.floor(Math.random() * cw * (Math.random() * i * 2) + cw * 0.3);
    const styledWH = Math.floor(Math.random() * cw * (Math.random() * i * 1) + cw * 0.1);

    addRect(jsWH, ch / 3, 100 * 0.5, 100 * 0.5, {
      label: "JS",
      render: { sprite: { texture: "./assets/img/about/icon_js.png", xScale: 0.5, yScale: 0.5 } },
      velocity: { x: 0, y: -5 },
    });
    addRect(htmlWH, ch / 2, 100 * 0.7, 100 * 0.7, {
      label: "HTML",
      render: { sprite: { texture: "./assets/img/about/icon_html.png", xScale: 0.7, yScale: 0.7 } },
      velocity: { x: 0, y: -5 },
    });
    addRect(cssWH, ch / 2, 100 * 0.8, 100 * 0.8, {
      label: "CSS",
      render: { sprite: { texture: "./assets/img/about/icon_css.png", xScale: 0.8, yScale: 0.8 } },
      velocity: { x: 0, y: -5 },
    });
    addRect(reactWH, 0, 100 * 0.6, 100 * 0.6, {
      label: "REACT",
      render: { sprite: { texture: "./assets/img/about/icon_react.png", xScale: 0.6, yScale: 0.6 } },
      velocity: { x: 0, y: -5 },
    });
    addRect(tailWH, ch / 2, 100 * 0.6, 100 * 0.6, {
      label: "TAILWIND",
      render: { sprite: { texture: "./assets/img/about/icon_tail.png", xScale: 0.6, yScale: 0.6 } },
      velocity: { x: 0, y: -5 },
    });
    addRect(reduxWH, ch / 3, 100 * 0.5, 100 * 0.5, {
      label: "REDUX",
      render: {
        sprite: { texture: "./assets/img/about/icon_redux.png", xScale: 0.5, yScale: 0.5 },
      },
    });
    addRect(styledWH, ch / 3, 100 * 0.5, 100 * 0.5, {
      label: "STYLED",
      render: {
        sprite: { texture: "./assets/img/about/icon_styled.png", xScale: 0.5, yScale: 0.5 },
      },
    });
  }
}

// 영역 밖으로 나간 요소들 삭제해 성능 저하 막는 코드
Events.on(runner, "tick", () => {
  engine.world.bodies.forEach((body) => {
    const isOutside = body.position.y > ch;
    if (isOutside) Composite.remove(engine.world, body);
  });
});
