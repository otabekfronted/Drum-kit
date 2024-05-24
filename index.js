const drums = document.querySelectorAll(".drum");

const pressedBtn = (key) => {
    const btn = document.querySelector(`.${key}`);
    btn.classList.add("pressed");
    setTimeout(() => {
        btn.classList.remove("pressed");
    }, 100);
};
const musicPlay = (key) => {
    pressedBtn(key);
    switch (key) {
        case "w":
            const crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            const kick_bass = new Audio("./sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "s":
            const snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            const tom_1 = new Audio("./sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "j":
            const tom_2 = new Audio("./sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "k":
            const tom_3 = new Audio("./sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "l":
            const tom_4 = new Audio("./sounds/tom-4.mp3");
            tom_4.play();
            break;
        default:
            console.log("no key");
    }
};

drums.forEach((drum) => {
    drum.addEventListener("click", () => {
        const letter = drum.textContent;
        musicPlay(letter);
    });
});

document.addEventListener("keydown", (e) => {
    const key = e.key;
    musicPlay(key);
});
