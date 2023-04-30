var readline = require("readline-sync");

var nbr = readline.question("Saisir un nombre premier ? ");

function isPrime(nbr) {

    if (nbr<=1) return false; 
    for (var i = 2; i <= nbr-1; i++)
        if (nbr% i == 0) return false;
        console.log("Oui, " + nbr + " est un nombre premier . " + isPrime(nbr));
            
    return ;
    console.log("Non, " + nbr + " n'est pas un nombre premier " + isPrime(nbr));
};

    
