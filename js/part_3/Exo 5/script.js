function get(id) {
    return document.getElementById(id)
}

function kill(elt) {
    elt.textContent = "Je suis un poisson mort"
}

kill(get("poisson1"))