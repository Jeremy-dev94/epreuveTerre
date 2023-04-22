var readline = require("readline-sync");

var question = parseInt(readline.question("saisir un chiffre ?"));
    if(question %2 == 0){
    console.log("Pair");
} else {
    console.log("Impair")
}