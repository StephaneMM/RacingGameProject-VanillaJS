let myCar = document.querySelector(".my-car");
let swerveBy = 50;
let cars = document.querySelectorAll(".cars");
let game = document.querySelector(".game-div");

function driving(e) {
  if (e.key === "ArrowLeft") {
    console.log("here", myCar);
    myCar.style.left = `${parseInt(myCar.style.left) - swerveBy}px`;
  }
  //   console.log(">>>", e.key);
  //   console.log(parseInt(myCar.style.left));
  //   console.log(`${parseInt(myCar.style.left) - swerveBy}px`);

  if (e.key === "ArrowRight") {
    myCar.style.left = `${parseInt(myCar.style.left) + swerveBy}px`;
  }
}

document.addEventListener("keydown", driving);

function create2Nb() {
  let rdmIA = parseInt(Math.floor(Math.random() * 3));
  let rdmIB = parseInt(Math.floor(Math.random() * 3));

  while (rdmIA === rdmIB) {
    rdmIB = parseInt(Math.floor(Math.random() * 3));
  }
  return [rdmIA, rdmIB];
}
function creatingSpace(index) {
  // console.log("current ind x", index)
  const newCar = document.createElement("div");
  newCar.className = "cars ";
  newCar.className += index === 0 ? "left" : index === 1 ? "middle" : "right";
  game.appendChild(newCar);

  //const timeoutId = setTimeout(() => {
      newCar.className += " go";
      // clearTimeout(timeoutId);
  //}, 1000)
}

// function clearHTML() {
//   // game.innerHTML = `<div class="my-car" style="left: 175px"></div>`;
// }

/*let salve = setInterval(() => {
  const [a, b] = create2Nb();
  // console.log(a, b);
  creatingSpace(a);
  creatingSpace(b);
}, 1000);*/

let _FRAMEID;
let tick = 0;

const gameLoop = () => {
  const [a, b] = create2Nb();
  // console.log(a, b);
  if (tick % 60 === 0) {
    creatingSpace(a);
    creatingSpace(b);
  }

  tick++;
  _FRAMEID = requestAnimationFrame(gameLoop);
};

_FRAMEID = requestAnimationFrame(gameLoop);
//cancelAnimationFrame(_FRAMEID)

//  let salve2=setTimeout(function() {

//     setInterval(() => {
//     create2Nb();
//     creatingSpace(rdmIA);
//     creatingSpace(rdmIB);

//  }, 1000)
// }, 500)

// let clear = setInterval(() => {
//   clearHTML();
// }, 999);

// console.log(EVERY STEP !!!!!);
// console.log(EVERY STEP !!!!!);
// console.log(EVERY STEP !!!!!);
// console.log(EVERY STEP !!!!!);
