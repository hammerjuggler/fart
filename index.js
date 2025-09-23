let shaking = false;
const fart = new Audio("fart.flac");
clickMe.onmousedown = () => {
    counter += 1;
    if (counter > 10) {
        clickMe.innerText = "You unlocked the CRIT fart";
        critFart.currentTime = 0;
        critFart.play();
    } else if (counter > 3){
        clickMe.innerText = "Getting used to this";
        regularFart.currentTime = 0;
        regularFart.play();
    } else {
        clickMe.innerText = "Gotchu!!!!";
        regularFart.currentTime = 0;
        regularFart.play();
    }
    shaking = true;
};
fart.onended = () => {
    shaking = false;
;}
let prevTimestamp = 0;
function frame(timestamp) {
    const deltaTime = (timestamp - prevTimestamp)/1000;
    prevTimestamp = timestamp;
    if (shaking) {
        const x = Math.random()*2 -1 + 50;
        const y = Math.random()*2 -1 + 50;
        clickMe.style.left = '${x}%';
        clickMe.style.top = '${y}%';
    }
    window.requestAnimationFrame(frame);
};

window.requestAnimationFrame((timestamp) => {
    prevTimestamp = timestamp;
    window.requestAnimationFrame(frame);
});