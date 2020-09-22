const BTNS = document.querySelectorAll(".app__btn")
const TITLE = document.querySelector(".app__title")
const TEXT = document.querySelector(".app__text")

//Je click sur un bouton:
//  je retire la class active à tout les boutons
//  j'ajoute la class active sur le bouton click

const DEF = {
    "epaule": "Ceci est une épaule",
    "coude": "Ceci est un coude, Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ex perspiciatis numquam repellendus, dolores quasiquo in sunt itaque! Omnis sapiente similique minima error deleniti excepturi facere debitis quaerat numquam!",
    
    "poignet": "Ceci est un poignet ",
    "hanche": "Ceci est une hanche",
    "genou": "Ceci est un genou",
    "cheville": "Ceci est une cheville",
}

BTNS.forEach((btn) => {
    btn.data = btn.getAttribute("data")
    btn.addEventListener("click", () => {
        BTNS.forEach((btn) => {
            btn.classList.remove("active")
        })
        TITLE.textContent = btn.data
        TEXT.textContent = DEF[btn.data]
        btn.classList.add("active")
    })
})