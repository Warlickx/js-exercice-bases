//Variables numériques
let score = 0;
let multiplier = 1;
let prixmultiplier = 50;
let prixauto = 500;
let prixbonus = 5000;
let quotient = 1.4
let temps = 3000

//Click
function cookieClick(){
    if (score>=0){
    score = score +1 * multiplier;
    document.getElementById("cookies").innerHTML='Score : '+score;
    document.getElementById("title").innerHTML=score+' Cookies';
}
}

//Multiplicateur
function augmenterMultiplicateur(){
    if(score>=prixmultiplier){
        multiplier++;
        score -= prixmultiplier;
        prixmultiplier = Math.floor(prixmultiplier * quotient);
        document.getElementById("cookies").innerHTML='Score : '+score;
        document.getElementById("multiplier").innerHTML='Multiplicateur x'+(multiplier+1)+' : '+prixmultiplier+' Cookies';
        document.getElementById("title").innerHTML=score+' Cookies';
    }
}

//Autoclick
function autoClick(){
    if(score>=prixauto){
        score -= prixauto;
        prixauto = Math.floor(prixauto * quotient);
        cookieClick();
        setInterval(cookieClick, 1000);
        document.getElementById("cookies").innerHTML='Score : '+score;
        document.getElementById("auto").innerHTML='Autoclick : '+prixauto+' Cookies';
        document.getElementById("title").innerHTML=score+' Cookies';
    }
}

//Bonus
function bonus(){
    if(score>=prixbonus){
        score -= prixbonus;
        score = (score +1 * multiplier)*3;
        document.getElementById("cookies").innerHTML='Score : '+score;
        document.getElementById("title").innerHTML=score+' Cookies';
    }
    clearTimeout(3000);
}