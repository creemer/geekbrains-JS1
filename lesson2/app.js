 var a = +prompt('PLease A',''),
     b = +prompt('Please B','');

if(a > 0 && b > 0) {
    alert(a - b);

}else if(a < 0 && b < 0) {
    alert(a * b);

} else {
    alert(a + b);
}

 /**
  * Функция сложения
  */
 function additionNum(a, b) {
    return +a + +b;
}

 /**
  * Функция вычитания
  */
 function substrNum(a, b) {
    return a - b;
}

 /**
  * Функция умножения
  */
 function multNum(a, b) {
    return a * b;
}

 /**
  * Функция деления, с проверкой B - не ноль
  */
 function divNum(a, b) {
    if(b != 0) {
        return a / b;
    } else {
        alert('B - can\' be a zero!');
    }
}

function searchNum(j) {
    for (var i = j; i < 16; i++) {
        alert(i);
    }
}

switch (a) {
    case 1 :
    case 2 :
    case 3 :
    case 4 :
    case 5 :
    case 6 :
    case 7 :
    case 8 :
    case 9 :
    case 10 :
    case 11 :
    case 12 :
    case 13 :
    case 14 :
    case 15 :
        searchNum(a);
        break;
    default :
        alert('It is incorrect number');
}

/**
 * Функция калькулятор
 */
function mathOperation(a, b, operation) {
    if(typeof(a) == "number" && typeof(b) == "number") {

        var one = a;
            second = b;

        if(operation == '+') {
            return one + second;

        } else if(operation == '-'){
            return one - second;

        } else if(operation == '*') {
            return one * second;

        } else if(operation == '/'){
            if(second != 0) {
                return one / second;

            } else {
                alert('B - can\'t be a null, try another number!');
            }

        } else {
            alert('Please white a correct operation!');
        }

    }
    else {
        alert('Please write a number!');
    }
}

alert( mathOperation( +prompt('Please First operand', ''), +prompt('Please Second operand', ''), prompt('Please operation', '') ) );

/**
 * Функция возведения числа X в степнь N
 */
function pow(x, n) {
    var sum = x;

    for (var i = 1; i < n; i++) {
        sum *= x;
    }

    return sum;
}

var x = +prompt('Number please',''),
    n = +prompt('Power please','');

if (n < 1) {
    alert('Power ' + n + ' must be higher than 0')
} else {
    alert( pow(x,n) );
}

 /**
  * Функция возведения числа X в степнь N с помощью реукерсии
  */
 function powRecurive(x, n) {
     return (n != 1) ?
         x * pow(x, n - 1) :
         x;
 };

alert( powRecurive( +prompt('Number please', ''), +prompt('Power please', '') ) );

alert(null == 0); // Выведет false - потому что null равен только undefined, и больше ничему.