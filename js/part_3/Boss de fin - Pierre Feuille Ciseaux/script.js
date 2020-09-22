const feuille = document.querySelector("#feuille")
const ciseaux = document.querySelector("#ciseaux")
const pierre = document.querySelector("#pierre")

const result = document.querySelector("#result")
const partie = document.querySelector("#partie")

const BTNS = [feuille, ciseaux, pierre]
BTNS.forEach((btn) => {
    btn.addEventListener("click", function () {
        jeu(this.id)
    })
})

function jeu(id) {
    let i = Math.floor(Math.random() * BTNS.length)
    let npc = BTNS[i].id
    let player = id
    partie.textContent = "Skynet a joué : " + npc + " / " + "Joueur a joué : " + player
    if ((player == "ciseaux" && npc == "feuille")
        || (player == "feuille" && npc == "pierre")
        || (player == "pierre" && npc == "ciseaux")) {
        result.textContent = "Gagné !"
    } else if (player == npc) {
        result.textContent = "Égalité !"
    }
    else {result
        result.textContent = "Perdu !"
    }
}

/* const BTNS = document.querySelectorAll("button")
const PARTIE = document.querySelector("#partie")
const RESULT = document.querySelector("#result")
const CHOICES = ["pierre", "feuille", "ciseaux"]

let npc
let player

BTNS.forEach((btn) => {
    btn.addEventListener("click", () => {
        player = btn.id
        npc = CHOICES[Math.floor(Math.random() * 3)]
        PARTIE.textContent = "Vous : " + player + " / " + "Skynet : " + npc
        if ((player == "ciseaux" && npc == "feuille")
            || (player == "feuille" && npc == "pierre")
            || (player == "pierre" && npc == "ciseaux")) {
            RESULT.textContent = "Gagné !"
        } else if (player == npc) {
            RESULT.textContent = "Égalité !"
        }
        else {
            RESULT.textContent = "Perdu !"
        }
    })
})
 */