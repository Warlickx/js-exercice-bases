//Variables numériques
let score = 0;
let clic = 1;

//Clic
function click(){
    score += clic;
    document.getElementById('affichageCookie').innerHTML = score;
}