const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

document.body.style.backgroundColor = "#f1f5f8";

btn.addEventListener('click', function() {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}