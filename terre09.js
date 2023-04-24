var readline = require("readline-sync");

var saisie = parseInt(readline.question("calculer la racine carré de ? "));

if(isNaN(saisie)) {
    var saisie2 = parseInt(readline.question("Saisir un entier ? "));
    console.log("La racine carré de " + saisie2 + " = " + Math.sqrt(saisie2));
} else {
    console.log("La racine carré de " + saisie + " = " + Math.sqrt(saisie));
}