function makesObjectFromNum(num) {

    var obj = {};
    num += ''; 

    if(num < 1000 && num > 0) {
        if(num.length == 3) {
            obj.units = +num[2];
            obj.tens = +num[1];
            obj.hundreds = +num[0];

            return obj;

        } else if(num.length == 2) {
            obj.units = +num[1];
            obj.tens = +num[0];

            return obj;

        } else {
            obj.units = +num[0];
            return obj;
        }
               
    } else {
        console.log('Please write correct number','');
        return obj;
    }    
}

console.log( makesObjectFromNum(521) );
console.log( makesObjectFromNum(52) );
console.log( makesObjectFromNum(2) );