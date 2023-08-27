// 1
const supprime = document.querySelectorAll(".red")
for (let i = 0; i < supprime.length; i++) {
    supprime[i].classList.remove("red")
    supprime[i].classList.add("blue")
}
// console.log(supprime);
// 2
const refrains = document.querySelectorAll(".refrain")
for (let i = 0; i < refrains.length; i++) {
    refrains[i].setAttribute("style", "font-style: italic")
}
// 3
const couleur = document.querySelectorAll(".blue")
for (let i = 0; i < couleur.length; i++) {
    couleur[i].classList.remove("blue")
    couleur[i].setAttribute("style", "background-color: #6495ED")
}
// 4
const paragraphe = document.querySelectorAll("p")
for (let i = 0; i < paragraphe.length; i++) {
    paragraphe[i].setAttribute("style", "margin: 0")
}

