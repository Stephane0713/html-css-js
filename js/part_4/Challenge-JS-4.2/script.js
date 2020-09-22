const screen = document.querySelector("#screen")
addEventListener("keypress", (e) => {
    if (!isNaN(e.key) || ["*", "/", "+", "-", "%", "^", "(", ")", "."].includes(e.key)) {
        screen.textContent += e.key
    }
    e.preventDefault()
})

const btn = document.querySelector(".btn")
const result = document.querySelector("#result")

btn.addEventListener("click", () => {
    try {
        result.textContent = eval(screen.textContent)
    } catch (err) {
        result.textContent = "Une erreur c'est produit"
    } finally {
        screen.textContent = ""
    }
})