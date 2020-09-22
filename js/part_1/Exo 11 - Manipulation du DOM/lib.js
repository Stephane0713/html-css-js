function showHxContent(p) {
    const vDiv = document.getElementById(`title${p}`)
    vDiv.style.display = "block"
}

function hideAllDivs() {
    const vDiv = document.getElementsByTagName("div")
    for (e of vDiv) {
        e.style.display = "none"
    }
}

function alertTitle () {
    const vHx = document.querySelectorAll("h1")
    const i = document.querySelector("#title").value
    alert(vHx[i - 1].textContent)
}

function deleteTitle() {
    const vHx = document.querySelectorAll("h1")
    const i = document.querySelector("#title").value
    vHx.item(i - 1).removeChild(vHx.item(i - 1).firstChild)
}

function deleteTitle() {
    const vHx = document.querySelectorAll("h1")
    const i = document.querySelector("#title").value
    vHx.item(i - 1).removeChild(vHx.item(i - 1).firstChild)
}

function defineTitle() {
    const vHx = document.querySelectorAll("h1")
    const i = document.querySelector("#title").value
    const vText = document.createTextNode("Nouveau Titre")
    if(vHx[i - 1].firstChild !== null) {
        vHx.item(i - 1).removeChild(vHx.item(i - 1).firstChild)
    } 
    vHx.item(i - 1).appendChild(vText)
}