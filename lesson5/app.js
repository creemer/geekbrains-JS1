'use strict'

var wrapper = document.createElement('div');
wrapper.id = 'wrapper';
wrapper.classList.add('flexed');
document.body.insertBefore(wrapper, document.body.firstChild);

for (var i = 1; i <= 8; i++) {
    var sqr = document.createElement('div');

        if(i % 2 == 0) {
            generateEvenLineSqr();
        } else {
            generateOddLineSqr();
        }
}

function generateOddLineSqr() {
    for (var i = 1; i <= 8; i++) {
        var sqr = document.createElement('div');

        if(i % 2 == 0) {
            sqr.classList.add('flexed', 'lightSqr');
            wrapper.appendChild(sqr);
        } else {
            sqr.classList.add('flexed', 'darkSqr');
            wrapper.appendChild(sqr);
        }
    }
}

function generateEvenLineSqr() {
    for (var i = 1; i <= 8; i++) {
        var sqr = document.createElement('div');

        if(i % 2 == 0) {
            sqr.classList.add('flexed', 'darkSqr');
            wrapper.appendChild(sqr);
        } else {
            sqr.classList.add('flexed', 'lightSqr');
            wrapper.appendChild(sqr);
        }
    }
}