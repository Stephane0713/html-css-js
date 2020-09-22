const soupe = document.querySelectorAll(".soupe p")
const boire = document.querySelector("#boire")

const fauteuil = document.querySelectorAll(".fauteuil p")
const reposer = document.querySelector("#reposer")

const lit = document.querySelectorAll(".lit p")
const dormir = document.querySelector("#dormir")

boire.addEventListener("click", ()=> {
    soupe.forEach((elt)=> {
        elt.textContent = "Bol vide"
    })
})

reposer.addEventListener("click", ()=> {
    fauteuil.forEach((elt)=> {
        elt.textContent = "fauteuil souillé"
    })
})

dormir.addEventListener("click", ()=> {
    lit.forEach((elt)=> {
        elt.textContent = "lit défait"
    })
})