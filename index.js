const regularFart = new Audio("fart.flac");
const critFart = new Audio("fart.flac");
const farts = [
    regularFart,
    critFart,
];
let shaking = false;
let counter = 0;

function finishFart() {
    shaking = false;
}
for (let fart of farts) {
    fart.onended = finishFart;
};
clickMe.onmousedown = () => {
    counter += 1;
    if (counter > 10) {
        clickMe.innerText = "You broke it";
        critFart.currentTime = 0;
        critFart.play();
    } else if (counter > 3){
        clickMe.innerText = "oh you are into that!!";
        regularFart.currentTime = 0;
        regularFart.play();
    } else {
        clickMe.innerText = "Gotchu!!!!";
        regularFart.currentTime = 0;
        regularFart.play();
    }
    shaking = true;
};

let prevTimestamp = 0;
function frame(timestamp) {
    const deltaTime = (timestamp - prevTimestamp)/1000;
    prevTimestamp = timestamp;
    if (shaking) {
        const x = Math.random()*2 -1 + 50;
        const y = Math.random()*2 -1 + 50;
        clickMe.style.left = `${x}%`;
        clickMe.style.top = `${y}%`;
    } else {
        clickMe.style.left = "50%";
        clickMe.style.top = "50%";
    }
    window.requestAnimationFrame(frame);
};

window.requestAnimationFrame((timestamp) => {
    prevTimestamp = timestamp;
    window.requestAnimationFrame(frame);
});