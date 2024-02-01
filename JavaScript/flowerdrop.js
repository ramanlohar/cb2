var currentSecond = 0;
var intervalId;

function createFlower() {
    const flowerContainer = document.querySelector('body');
    const flowerPetal = document.createElement('div');
    flowerPetal.classList.add('flower-petal');
    flowerPetal.style.left = `${Math.random() * 100}vw`; // Random left position
    flowerPetal.style.transform = `translateX(-50%) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) rotateZ(${Math.random() * 360}deg)`;
    flowerPetal.style.backgroundColor = getRandomColor();

    // Randomize animation duration between 1s and 3s
    flowerPetal.style.animationDuration = `${Math.random() * 2 + 1}s`;

    flowerContainer.appendChild(flowerPetal);

    currentSecond += 300;

    if (currentSecond >= 10000) {
        clearInterval(intervalId);
        // window.location.href = "home.html";
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

intervalId = setInterval(createFlower, 300);
