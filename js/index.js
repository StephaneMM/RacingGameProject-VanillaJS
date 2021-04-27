let myCar = document.querySelector(".my-car")
let swerveBy = 50;
let cars = document.querySelectorAll(".cars")
let game = document.querySelector(".game-div")

function driving(e) {
    if (e.key === 'ArrowLeft') {
        myCar.style.left = `${parseInt(myCar.style.left) - swerveBy}px`;
    }

    if (e.key === 'ArrowRight') {
        myCar.style.left = `${parseInt(myCar.style.left) + swerveBy}px`;
    }
}

document.addEventListener('keydown', driving);

let rdmIA = 0;
let rdmIB = 0;

function create2Nb() {
rdmIA = parseInt(Math.floor(Math.random() * 3));
rdmIB = parseInt(Math.floor(Math.random() * 3));

while (rdmIA === rdmIB){
    rdmIB = parseInt(Math.floor(Math.random() * 3));
}  
}


function creatingSpace(index) {

    switch(index){
        case 0:
            game.innerHTML+= `<div class="cars left go"></div>`;
            break;
        
        case 1:
            game.innerHTML+= `<div class="cars middle go"></div>`;
            break;

        case 2:
            game.innerHTML+= `<div class="cars right go"></div>`;
            break;
    }
    
}

function clearHTML() {
    game.innerHTML=`<div class="my-car" style="left: 175px"></div>`

    
}





let salve = setInterval(() => {
    create2Nb();
    creatingSpace(rdmIA);
    creatingSpace(rdmIB);

 }, 1000)

 setTimeout(function() {
    
        setInterval(() => {
        create2Nb();
        creatingSpace(rdmIA);
        creatingSpace(rdmIB);
    
     }, 1000)
}, 500)




 let clear = setInterval(()=> { 
     clearHTML()
     }, 999);

 


// console.log(EVERY STEP !!!!!);
// console.log(EVERY STEP !!!!!);
// console.log(EVERY STEP !!!!!);
// console.log(EVERY STEP !!!!!);
