let myCar = document.querySelector(".my-car");
let swerveBy = 50;
let cars = document.querySelectorAll(".cars");
let game = document.querySelector(".game-div");

function driving(e) {
  if (e.key === "ArrowLeft") {
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
  newCar.className = "cars go ";
  newCar.className += index === 0 ? "left" : index === 1 ? "middle" : "right";
  game.appendChild(newCar);

  const timeoutId = setTimeout(() => {
    clearTimeout(timeoutId);
    newCar.remove();
  }, 1000);
}

function getRect(shape) {
  const { x, y, width, height } = shape.getBoundingClientRect();
  return {
    x: x,
    x1: x + width,
    y: y,
    y1: y + height,
  };
}

function checkCollision() {
  cars = document.querySelectorAll(".cars");
  const myCarRect = getRect(myCar);
  const carsShapes = [...cars];

  const touch =carsShapes.map((car) => {
    const { x, x1, y1 } = getRect(car);
    const matchLeft = x1 >= myCarRect.x && x1 <= myCarRect.x1;
    const matchRight = x >= myCarRect.x1 && x <= myCarRect.x;
    const matchTop = y1 >= myCarRect.y && y1 <= myCarRect.y1;

    const isTouched =
      matchTop && matchLeft ? true : matchTop && matchRight ? true : false;
      return isTouched;

  });

  return touch.includes(true)
  

  // console.log(touch);
  // return touch;
}

// function clearHTML() {
//   // game.innerHTML = `<div class="my-car" style="left: 175px"></div>`;
// }


let _FRAMEID;
let tick = 0;

const gameLoop = () => {
  const [a, b] = create2Nb();
  // const [c, d] = create2Nb();
  
  if (tick % 60 === 0) {
    creatingSpace(a);
    creatingSpace(b);
   
  } // else if (tick % 30 === 0) {
  //   creatingSpace(c);
  //   creatingSpace(d);} <<< for next level

  tick++;
  _FRAMEID = requestAnimationFrame(gameLoop);
  // console.log(checkCollision())
  if (checkCollision()===true){
    cancelAnimationFrame(_FRAMEID)
  }

};
  
_FRAMEID = requestAnimationFrame(gameLoop);

window.onbeforeunload = () => {
  cancelAnimationFrame(_FRAMEID);
};

//cancelAnimationFrame(_FRAMEID)



// let clear = setInterval(() => {
//   clearHTML();
// }, 999);

// console.log(EVERY STEP !!!!!);
// console.log(EVERY STEP !!!!!);
// console.log(EVERY STEP !!!!!);

