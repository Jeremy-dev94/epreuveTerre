function findMiddleValue (a, b, c){
    if ((a >= b && a <= c) || (a <= b && a >= c)){
        return a;
    } else if ((b >= a && b <= c) || (b <= a && b >= c)){
        return b;
    } else {
        return c;
    }
 }

 console.log(findMiddleValue(11, 40, 34));
 console.log(findMiddleValue(55,69,12,));