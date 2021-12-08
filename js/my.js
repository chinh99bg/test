let inputGroupSelect01 = document.getElementById("inputGroupSelect01");
let inputGroupSelect02 = document.getElementById("inputGroupSelect02");
let inputGroupSelect03 = document.getElementById("inputGroupSelect03");
let btnDetermine = document.getElementById("btnDetermine");
let img = document.getElementById("img");
let title = document.getElementById("title");
let text = document.getElementById("text");



btnDetermine.addEventListener("click", hamGiDo);

function hamGiDo() {
    let dapan1 = inputGroupSelect01.options[inputGroupSelect01.selectedIndex].value;
    let dapan2 = inputGroupSelect02.options[inputGroupSelect02.selectedIndex].value;
    let dapan3 = inputGroupSelect03.options[inputGroupSelect03.selectedIndex].value;
    if (dapan1 == inputGroupSelect01.options[1].value && dapan2 == inputGroupSelect01.options[1].value && dapan3 == inputGroupSelect01.options[1].value) {
        title.textContent = "You are Human";
        text.textContent = "I like you";
        img.src = "human.jfif";
    } else if (dapan1 == inputGroupSelect01.options[0].value && dapan2 == inputGroupSelect02.options[0].value && dapan3 == inputGroupSelect02.options[2].value) {
        title.textContent = "You are Alien";
        text.textContent = "I like you";
        img.src = "./img/alien.jpg";
    } else {
        title.textContent = "you are bizarre ";
        text.textContent = "?????????????????";
        img.src = "./img/bizarre.jpg";
    }
}