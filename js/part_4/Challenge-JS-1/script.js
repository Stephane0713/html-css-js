function rebond(h, rebond, fenetre) {
  //votre code ici, n'oubliez pas de retourner le résultat
  let ball = h
  let i = 0
  if (h > 0 && (rebond > 0 && rebond < 1) && fenetre < h) {
    while (ball >= fenetre) {
      ball *= rebond
      i++
    }
    return (i * 2) - 1
  } else {
    return -1
  }
}

console.log(rebond(5, 0.66, 1.5))