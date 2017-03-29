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

function addDarkPawns() {
    setTimeout("wrapper.getElementsByClassName('lightSqr')[4].classList.toggle('blackPawn')", 300);
    setTimeout("wrapper.getElementsByClassName('lightSqr')[5].classList.toggle('blackPawn')", 900);
    setTimeout("wrapper.getElementsByClassName('lightSqr')[6].classList.toggle('blackPawn')", 1500);
    setTimeout("wrapper.getElementsByClassName('lightSqr')[7].classList.toggle('blackPawn')", 2100);

    setTimeout("wrapper.getElementsByClassName('darkSqr')[4].classList.toggle('blackPawn')", 600);
    setTimeout("wrapper.getElementsByClassName('darkSqr')[5].classList.toggle('blackPawn')", 1200);
    setTimeout("wrapper.getElementsByClassName('darkSqr')[6].classList.toggle('blackPawn')", 1800);
    setTimeout("wrapper.getElementsByClassName('darkSqr')[7].classList.toggle('blackPawn')", 2400);

}
function addWhitePawns() {
    setTimeout("wrapper.getElementsByClassName('lightSqr')[24].classList.toggle('whitePawn')", 600);
    setTimeout("wrapper.getElementsByClassName('lightSqr')[25].classList.toggle('whitePawn')", 1200);
    setTimeout("wrapper.getElementsByClassName('lightSqr')[26].classList.toggle('whitePawn')", 1800);
    setTimeout("wrapper.getElementsByClassName('lightSqr')[27].classList.toggle('whitePawn')", 2400);

    setTimeout("wrapper.getElementsByClassName('darkSqr')[24].classList.toggle('whitePawn')", 300);
    setTimeout("wrapper.getElementsByClassName('darkSqr')[25].classList.toggle('whitePawn')", 900);
    setTimeout("wrapper.getElementsByClassName('darkSqr')[26].classList.toggle('whitePawn')", 1500);
    setTimeout("wrapper.getElementsByClassName('darkSqr')[27].classList.toggle('whitePawn')", 2100);
}

setTimeout('addDarkPawns()', 500);
setTimeout('addWhitePawns()', 500);