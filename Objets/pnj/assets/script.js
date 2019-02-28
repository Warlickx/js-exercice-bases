let pnj = {
    name : "Samuel Butchnel",
    age : 43,
    items_to_give : ["dague" , "fiole de poison" , "pistolet"],
    giveItem : function(){
        let giveRandom = Math.floor(Math.random()*pnj.items_to_give.length);
        return pnj.items_to_give[giveRandom];
    }
}
console.log(pnj.items_to_give)
for (let key in pnj) {
    console.log(pnj[key]);
}
console.log(pnj.giveItem());