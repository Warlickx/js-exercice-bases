// <canvas id="mon-canvas" width="350" height="350"></canvas> dans l'HTML
let c = document.getElementById("mon-canvas");
// Contexte 2d ou 3d
let ctx = c.getContext("2d");

//Etapes d'un tracé
//Pour commencer beginPath();
//point de départ moveTo(x,y);
//point d'arrivée lineTo(x,y);
//clôture closePath();
//contour ou remplissage stroke(); ou fill();
//La forme n'apparait qu'une fois stroke ou fill appellés.
//exemple

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(200,200);
ctx.moveTo(200,50);
ctx.lineTo(50,200);
ctx.closePath();
//Style du remplissage et du contour
ctx.fillStyle = "red";
ctx.strokeStyle = "red";
//Style des largeurs et fins des lignes
ctx.lineJoin = "bevel";
ctx.lineCap = "round";
ctx.stroke();