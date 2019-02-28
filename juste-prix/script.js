//Variables
let coup = 0;
let min = 20;
let max = 80;
let réponse = Math.floor(Math.random() * (max - min +1)) + min

function jeux() {
    let guess = prompt("Quel est le juste prix?")
    coup++;
    if(guess>réponse){
        alert("C'est Moins !");
    }
    if(guess<réponse){
        alert("C'est plus !");
    }
    if(guess==réponse){
        alert("C'est juste tu as trouvé en"+coup+"coups");
    }
}