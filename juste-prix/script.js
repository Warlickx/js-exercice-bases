//Variables
let coup = 0;
let min = 20;
let max = 80;

function Random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    réponse = Math.floor(Math.random() * (max - min +1)) + min;
    return réponse;
}
console.log(Random(min, max));

function jeux() {
    let guess = prompt("Quel est le juste prix?")
    Random(min, max);
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