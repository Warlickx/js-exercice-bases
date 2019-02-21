//Variables
let solution = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
let blanc = [" ", " ", " ", " ", " ", " ", " "];
let text
function guessLetter() {
    text = prompt("Quelle lettre?").toUpperCase();
    console.log(txt);
    for (let i = 0; i <= solution.length; i++) {
        if (text === solution[i]) {
            blanc[i] = solution[i];
            console.log(blanc);
        }

        else if (blanc.toString() === solution.toString()) {
            return alert("Bien joué !")
        }
    }
    if (blanc.toString() !== solution.toString()) {
        guessLetter();
    }
}

function reset() {
    blanc = [];
    guessLetter();
}