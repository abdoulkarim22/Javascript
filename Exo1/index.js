// 1.
const titre = document.querySelector("body")
titre.firstElementChild.textContent ="Rick Astley - Never Gonna Give You Up"
// 2.
const couplets = document.querySelectorAll(".couplet")
for (let i = 0; i < couplets.length; i++) {
    couplets[i].firstChild.remove()
    couplets[i].firstChild.remove("br")
}
// 3.
const refrain = document.querySelectorAll(".refrain");
let table = [];
refrain.forEach(element => {
   const phrase = element.innerText.split('\n')
    //   console.log(phrase);
    phrase.forEach(ligne => {
        if(table.includes(ligne) === false){
            table.push(ligne) 
        } 
    });
    // console.log(table.join("<br>"));
    element.innerHTML = table.join("<br>")
});
//console.log(table)
// 4.
const supprime = document.getElementById("erreur")
supprime.remove()
// 5.
let footer =document.body;
const names = document.createElement("footer")
names.innerText ="© Copyright 2023 - ABDOUL KARIM";
footer.append(names)
