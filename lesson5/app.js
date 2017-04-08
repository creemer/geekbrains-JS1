'use strict'

var wrapper = document.createElement('div');
wrapper.id = 'wrapper';
wrapper.classList.add('flexed','relativePos');
document.body.appendChild(wrapper);

var numbers = document.createElement('div');
numbers.classList.add('outSideSqr','flexedColumn');
wrapper.appendChild(numbers);

for (i = 0; i < 8; i++) {
    sqr = document.createElement('div');
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


addNumbers();
addLetters();
addFigures();

for (var i = 1; i <= 8; i++) {
    var sqr = document.createElement('div');

        if(i % 2 == 0) {
            generateEvenLineSqr();
        } else {
            generateOddLineSqr();
        }
};

function addNumbers() {
    document.getElementsByClassName('sqrNumbers')[0].innerText = '1'
    document.getElementsByClassName('sqrNumbers')[1].innerText = '2'
    document.getElementsByClassName('sqrNumbers')[2].innerText = '3'
    document.getElementsByClassName('sqrNumbers')[3].innerText = '4'
    document.getElementsByClassName('sqrNumbers')[4].innerText = '5'
    document.getElementsByClassName('sqrNumbers')[5].innerText = '6'
    document.getElementsByClassName('sqrNumbers')[6].innerText = '7'
    document.getElementsByClassName('sqrNumbers')[7].innerText = '8'
};

function addLetters() {
    document.getElementsByClassName('sqrLetters')[0].innerText = 'A'
    document.getElementsByClassName('sqrLetters')[1].innerText = 'B'
    document.getElementsByClassName('sqrLetters')[2].innerText = 'C'
    document.getElementsByClassName('sqrLetters')[3].innerText = 'D'
    document.getElementsByClassName('sqrLetters')[4].innerText = 'E'
    document.getElementsByClassName('sqrLetters')[5].innerText = 'F'
    document.getElementsByClassName('sqrLetters')[6].innerText = 'G'
    document.getElementsByClassName('sqrLetters')[7].innerText = 'H'
};


function addFigures() {
    addDarkPawns();
    addWhitePawns();
    addCastles();
    addHorses();
    addSoldiers();
    addQueens();
    addKings();
};

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
};

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

function addCastles() {
    setTimeout("wrapper.getElementsByClassName('darkSqr')[0].classList.toggle('blackCastle')", 2700);
    setTimeout("wrapper.getElementsByClassName('lightSqr')[3].classList.toggle('blackCastle')", 2700);
    setTimeout("wrapper.getElementsByClassName('darkSqr')[31].classList.toggle('whiteCastle')", 3000);
    setTimeout("wrapper.getElementsByClassName('lightSqr')[28].classList.toggle('whiteCastle')", 3000);
}

function addHorses() {
    setTimeout("wrapper.getElementsByClassName('darkSqr')[3].classList.toggle('blackHorse')", 3300);
    setTimeout("wrapper.getElementsByClassName('lightSqr')[0].classList.toggle('blackHorse')", 3300);
    setTimeout("wrapper.getElementsByClassName('lightSqr')[31].classList.toggle('whiteHorse')", 3600);
    setTimeout("wrapper.getElementsByClassName('darkSqr')[28].classList.toggle('whiteHorse')", 3600);
}

function addSoldiers() {
    setTimeout("wrapper.getElementsByClassName('darkSqr')[1].classList.toggle('blackSoldier')", 3900);
    setTimeout("wrapper.getElementsByClassName('lightSqr')[2].classList.toggle('blackSoldier')", 3900);
    setTimeout("wrapper.getElementsByClassName('lightSqr')[29].classList.toggle('whiteSoldier')", 4200);
    setTimeout("wrapper.getElementsByClassName('darkSqr')[30].classList.toggle('whiteSoldier')", 4200);
}

function addQueens() {
    setTimeout("wrapper.getElementsByClassName('darkSqr')[2].classList.toggle('blackQueen')", 4500);
    setTimeout("wrapper.getElementsByClassName('lightSqr')[30].classList.toggle('whiteQueen')", 4500);
}

function addKings() {
    setTimeout("wrapper.getElementsByClassName('darkSqr')[29].classList.toggle('whiteKing')", 4800);
    setTimeout("wrapper.getElementsByClassName('lightSqr')[1].classList.toggle('blackKing')", 4800);
}

