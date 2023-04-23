function reverseString(str){
    
    str = Array.from(str);
    str = str.reverse().join("");
console.log(str)
}
reverseString("Coding Accelerator")