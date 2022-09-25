const p1Score = document.querySelector('#p1Score')
const p2Score = document.querySelector('#p2Score')
const p1Add = document.querySelector('#p1Add')
const p2Add = document.querySelector('#p2Add')
const reset = document.querySelector('#reset')
const num = document.querySelector('#num')
let i1 = 0;
let i2 = 0;

p1Add.addEventListener('click', () => {
    i1++;
    p1Score.innerText = i1;
    p1Score.value = i1;
    if (p1Score.value == num.value) {
        p1Score.classList.add('green')
        p2Score.classList.add('red')
        p1Add.setAttribute('disabled', true)
        p2Add.setAttribute('disabled', true)
    }
})

p2Add.addEventListener('click', () => {
    i2++;
    p2Score.innerText = i2;
    p2Score.value = i2;
    if (p2Score.value == num.value) {
        p2Score.classList.add('green')
        p1Score.classList.add('red')
        p2Add.setAttribute('disabled', true)
        p1Add.setAttribute('disabled', true)
    }
})

reset.addEventListener('click', () => {
    window.location.reload()
})