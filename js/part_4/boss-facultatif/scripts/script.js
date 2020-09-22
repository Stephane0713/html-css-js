/*
 NOM : Stephane 
 GROUPE : Moi
*/

window.addEventListener("load", () => {
    createFilmsList()
    displayDetails()
})

// blueprint of film block
function createFilmBlock(film, index) {
    const details = document.getElementById("details")
    const block = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h3");

    block.className = "film"
    block.id = index + "-film"
    block.i = index
    block.fav = false

    image.src = film.image

    title.textContent = film.title

    block.appendChild(image)
    block.appendChild(title)

    block.addEventListener("mouseover", function() {
        details.textContent = film.text
    })

    block.addEventListener("click", function() {
        if (block.fav) {
            removeFavorite(block)
            filterFilms(title, block, searchBar.value)
        } else {
            addFavorite(block)
        }
    })

    const searchBar = document.getElementById("filter")
    searchBar.value = ""
    searchBar.addEventListener("keyup", function() {
        filterFilms(title, block, searchBar.value)
    })

    return block
}

// create and add films
function createFilmsList() {
    const films = document.getElementById("films")
    for (let i = 0; i < filmData.length; i++) {
        films.appendChild(createFilmBlock(filmData[i], i))
    }
}

// filter films by their titles if they match searchBar value
function filterFilms(title, film, test) {
    if (!film.fav) {
        if (title.textContent.toLowerCase().includes(test.toLowerCase())) {
            film.style.display = "inline-block"
        } else {
            film.style.display = "none"
        }
    }
}

// show/hide details
function displayDetails() {
    const details = document.getElementById("details")
    const btn = document.getElementById("showDetails")
    btn.checked = true

    btn.addEventListener("click", function() {
        if (btn.checked) {
            details.style.display = "block"
        } else {
            details.style.display = "none"
        }
    })
}

// remove target from #films and add it to an empty select
function addFavorite(film) {
    const select1 = document.getElementById("select1")
    const select2 = document.getElementById("select2")

    if (select1.childElementCount <= 1) {
        film.fav = true
        select1.insertBefore(film, select1.firstChild)
    } else if (select2.childElementCount <= 1) {
        film.fav = true
        select2.insertBefore(film, select2.firstChild)
    } else {
        alert("Trop de films")
    }
}

function removeFavorite(film) {
    const filmsRep = document.getElementById("films")
    filmsRep.insertBefore(film, filmsRep.childNodes.item(film.i))
    film.fav = false
}