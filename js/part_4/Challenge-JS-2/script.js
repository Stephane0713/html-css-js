function couleur(cartes) {
    let colors = []
    for (carte of cartes) {
        let color = carte[carte.length -1]
        if(!colors.includes(color)) {
            colors.push(color)
        }
    }
    return colors.length == 1
}