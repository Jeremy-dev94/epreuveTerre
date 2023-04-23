var readline = require("readline-sync");

var nbr = readline.questionInt("Saisir un nombre ? ");
var puissance = readline.questionInt("Saisir une puissance ? ");

if(puissance < 0){
    var puissance2 = readline.questionInt("Saisir une puissance positive ");
    console.log(nbr + " à la puissance " + puissance2 + " = " + Math.pow(nbr, puissance2)); 
} else if (isNaN(nbr, puissance)){
    let puissance2 = readline.questionInt("Saisir un nombre ? ");
    console.log(nbr + " à la puissance " + puissance2 + " = " + Math.pow(nbr, puissance2));
} else {
    console.log(nbr + " à la puissance " + puissance + " = " + Math.pow(nbr, puissance));
}