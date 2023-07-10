console.log('Hello World !');

let timer = 10;
let score = 0;
let bestscore = localStorage.getItem('bestscore') ? localStorage.getItem('bestscore') : 0;

let timerEl = document.querySelector('#timer');
timerEl.innerHTML = timer;

let bestScoreEl = document.querySelector('#bestscore');
bestScoreEl.innerHTML = bestscore;

let scoreEl = document.querySelector('#score');
scoreEl.innerHTML = score;

let boxEl = document.querySelector('.box');
let randTop = Math.floor(Math.random() * (window.innerHeight-100));
let randLeft = Math.floor(Math.random() * (window.innerWidth-100));
boxEl.style.top = randTop + "px";
boxEl.style.left = randLeft + "px";


boxEl.addEventListener('click', () => {
    console.log('click sur le bouton !');
    if (timer > 0) {
        score ++;
        scoreEl.innerHTML = score;

        boxEl.style.top = Math.floor(Math.random() * (window.innerHeight-100)) + "px";
        boxEl.style.left = Math.floor(Math.random() * (window.innerWidth-100)) + "px";
    }
});

const countdown = () => {
    console.log('timer !');
    if (timer > 0) {
        timer --;
        timerEl.innerHTML = timer;
    }

    if (timer == 0) {
        if (score > bestscore) {
            alert('Meilleur Score battu !');
            bestScoreEl.innerHTML = score;
            localStorage.setItem('bestscore', score);
        }
        clearInterval(interval);
    }
}

const interval = setInterval(countdown, 1000);

/*let animals = ['lion', 'tigre', "aigle"];
console.log(animals);
animalsEl = document.querySelector('.animals');
animals.forEach(animal => {
    animalsEl.innerHTML += '<li>' + animal + '</li>';
})*/