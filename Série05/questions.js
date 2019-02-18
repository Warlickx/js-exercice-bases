/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
var concatString = function (texte1, texte2) {
    return texte1+texte2;
}
var afficherCar5 = function (texte) {
    let str = 'texte';
    let x = str.charAt(4);
    return x;
}
var afficher9Car = function (texte) {
    let str = texte;
    let x = str.substring(0,9);
    return x;
}
var majusculeString = function (texte) {
    let str = texte;
    let x = str.toUpperCase();
    return x;
}
var minusculeString = function (texte) {
    let str = texte;
    let x = str.toLowerCase();
    return x;
}
var SupprEspaceString = function (texte) {
    let str = texte;
    let x = str.trim();
    return x;
}
var IsString = function (texte) {
    (typeof value === 'string');
    return true;
}

var AfficherExtensionString = function (texte) {
    let filename = texte;
    let extension = filename.split('.').pop();
    return extension;
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
var InverseString = function (texte) {
    let str = texte;
    return str.split("").reverse().join("");
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(5);
}
var valeurAbsolueArray = function (array) {
    let a = Math.abs(5);
    let b = Math.abs(50);
    let c = Math.abs(25);
    let d = Math.abs(568);
    return [a, b, c, d];
}
var sufaceCercle = function (rayon) {
    let area = Math.PI * rayon * rayon;
    return Math.ceil(area);
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}
var calculIMC = function (poids, taille) {
    let a = poids;
    let b = taille;
    let imc = a / (b*b);
    return Number(imc.toFixed(2));
}
