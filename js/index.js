let myCar = document.querySelector(".my-car")
let swerveBy = 50;
let cars = document.querySelectorAll(".cars")

function driving(e) {
    if (e.key === 'ArrowLeft') {
        myCar.style.left = `${parseInt(myCar.style.left) - swerveBy}px`;
    }

    if (e.key === 'ArrowRight') {
        myCar.style.left = `${parseInt(myCar.style.left) + swerveBy}px`;
    }
}

document.addEventListener('keydown', driving);

// setInterval(() => {
// currentTime++;
      
//     }, 1000)


// console.log(EVERY STEP !!!!!);
// console.log(EVERY STEP !!!!!);
// console.log(EVERY STEP !!!!!);
// console.log(EVERY STEP !!!!!);
