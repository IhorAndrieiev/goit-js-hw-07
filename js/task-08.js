
// const ref = {
//     divControlsRef: document.querySelectorAll('#controls'),
    
//     divBoxesRef: document.querySelector('#boxes')
// };
// console.log('ref', ref)

// function createBoxes(amount) {

// };
 
// function destroyBoxes() {

// };

function randomizer() {
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
}
console.log(randomizer())
const refs = {
    input: document.querySelector("input"),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
}
function createBoxes(amount) {
    let size = 30;
    const arr = [];
    destroyBoxes();
    for (let i = 1; i <= amount; i++) {
        const div = document.createElement("div");
        div.style.width = div.style.height = size + "px"
        div.style.backgroundColor = randomizer()
        arr.push(div)
        size +=10
    }
    document.querySelector("#boxes").append(...arr)
}
function destroyBoxes() {
    document.querySelector("#boxes").innerHTML = "";
    refs.input.value = ""
}
refs.renderBtn.addEventListener("click", () => {
    if (+refs.input.max >= +refs.input.value) {
        createBoxes(+refs.input.value)
        return
    }
    alert("слишком много дивов")
})
refs.destroyBtn.addEventListener("click", destroyBoxes)