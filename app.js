const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const points = document.getElementById('points');
const maxPoints = document.getElementById('max_points');

let sumOfPoints = 0;
let maxSumOfPoints = 0;
let state = false;
let numberOfJumps = 0;

document.addEventListener('keydown', function (event) {
    jump()
})

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump')
    }

    setTimeout(function () {
        dino.classList.remove('jump')
    }, 300)

    if (numberOfJumps === 0) {
        numberOfJumps = 1;
        time_points();
    } else {
        stop_points();
    }
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (state === true) {
        if (sumOfPoints > maxSumOfPoints) {
            maxSumOfPoints = sumOfPoints;
            maxPoints.innerHTML = maxSumOfPoints;
        }
        state = false;
        sumOfPoints = 0;
    }

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop > 240) {
        numberOfJumps = 0;
        state = true;
        alert('GAME OVER!')
    }
}, 10);

function time_points() {
    let interval = setInterval(function () {
        sumOfPoints += 1;
        points.innerHTML = sumOfPoints;
    }, 100)
}

function stop_points() {
    clearInterval(interval);
}