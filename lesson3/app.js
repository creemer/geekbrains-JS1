'use srtict';

console.log('Задание 1 Вариант 1 :');

var i = 1; 
while(i < 100) {
    if(i == 2) {
        console.log( i++ );
    } else if(i % 2 == 0 || isNature(i) ) {
        i++;
    } else {
        console.log( i++ );
    }
}

function isntNature(num) {
    for(var j = 2; j < num; j++) {
        if(num % j == 0) return true;
    }
}


console.log('Задание 1 Вариант 2 (Кстати оказался, легче для понимания, чем первый) : ');

next: for (var i = 1; i < 100; i++) {
         for (var j = 2; j < i; j++) {
            if(i % j == 0) continue next;
        }
         console.log( i );
}

console.log('Задание 2 : ');

function returnNumb( max ) {
    var i = 0;
    do {
        if( i == 0 ){
            console.log( i + " - это ноль" )
        } else if( i % 2 == 0 ) {
            console.log( i + " - это чётное число" )
        } else {
            console.log( i + " - это нечётное число" )
        }
        i++;
    } while( i <= max )
}

returnNumb( 10 );

console.log( 'Задание 3 :' );

for( var i = 0; i < 10; console.log (i++ ) ) {};

console.log( 'Задание 4 :' );

for( var i = 1, str = ''; i <= 20; i++ ) {
    if(i < 21) {
        str += 'x';
    }
    console.log( str );
}