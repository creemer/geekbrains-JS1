'use strict'

var wrapper = document.createElement('div');
wrapper.id = 'wrapper';
wrapper.classList.add('flexed','relativePos');
document.body.appendChild(wrapper);

var numbers = document.createElement('div');
numbers.classList.add('outSideSqr','flexedColumn');
wrapper.appendChild(numbers);

for (i = 0; i < 8; i++) {
    var sqr = document.createElement('div');
    sqr.classList.add('sqrNumbers');
    numbers.appendChild(sqr);
};

var letters = document.createElement('div');
letters.classList.add('outUpSqr','flexed');
wrapper.appendChild(letters);

for (i = 0; i < 8; i++) {
    sqr = document.createElement('div');
    sqr.classList.add('sqrLetters');
    letters.appendChild(sqr);
};

function addNumbers() {
    for (var i = 0; i < 8; i++) {
        document.getElementsByClassName('sqrNumbers')[i].innerText = (i + 1);
    }
}

addNumbers();

function addLetters() {
    var lettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    for (var i = 0; i < 8; i++) {
        document.getElementsByClassName('sqrLetters')[i].innerText = lettersArr[i];
    }
}

addLetters();

for (var i = 0, j = 1; i < 8; i++) {
    addLineSqr(j);
    j++;
}

function addLineSqr(line) {
    for (var i = 1; i <= 8; i++) {
        var sqr = document.createElement('div');

        if( (i + line) % 2 == 0) {
            sqr.classList.add('flexed', 'darkSqr');
            wrapper.appendChild(sqr);
        } else {
            sqr.classList.add('flexed', 'lightSqr');
            wrapper.appendChild(sqr);
        }
    }
}

