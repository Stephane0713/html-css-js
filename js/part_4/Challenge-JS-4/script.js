const nbr1 = document.querySelector("#nbr1")
const nbr2 = document.querySelector("#nbr2")
const op = document.querySelector("#op")
const btn = document.querySelector(".btn")
const result = document.querySelector("#result")

btn.addEventListener("click",()=> {
    result.textContent = eval(nbr1.value + op.value + nbr2.value)
})