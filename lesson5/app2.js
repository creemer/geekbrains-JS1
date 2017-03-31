'use strict'

/**
 * Adding main wrapper.
 * @type {Element}
 */
var wrapper = document.createElement('div');
wrapper.id = 'wrapper';
wrapper.classList.add('flexed','relativePos');
document.body.appendChild(wrapper);

/**
 * Adding wrapper for number squares.
 * @type {Element}
 */
var numbers = document.createElement('div');
numbers.classList.add('outSideSqr','flexedColumn');
wrapper.appendChild(numbers);

/**
 * Adding wrapper for letter squares.
 * @type {Element}
 */
var letters = document.createElement('div');
letters.classList.add('outUpSqr','flexed');
wrapper.appendChild(letters);

/**
 * Adds squares on board.
 */
for (var i = 0, j = 1; i < 8; i++) {
    addLineSqr(j);
    j++;
};

/**
 * Adding squares to letter wrapper.
 */
for (i = 0; i < 8; i++) {
    sqr = document.createElement('div');
    sqr.classList.add('sqrLetters');
    letters.appendChild(sqr);
};

/**
 * Adding squares for numbers to number wrapper.
 */
for (i = 0; i < 8; i++) {
    var sqr = document.createElement('div');
    sqr.classList.add('sqrNumbers');
    numbers.appendChild(sqr);
};

/**
 * Adding numbers and letters on board
 */
addNumbers();
addLetters();

/**
 * Adding figures on board
 */
setTimeout('addFigures(figures.pawn.white.position, figures.pawn.white.class, 8)', 300);
setTimeout('addFigures(figures.pawn.black.position, figures.pawn.black.class, 8)', 600);
setTimeout('addFigures(figures.castle.white.position, figures.castle.white.class, 2)', 900);
setTimeout('addFigures(figures.castle.black.position, figures.castle.black.class, 2)', 1200);
setTimeout('addFigures(figures.horse.white.position, figures.horse.white.class, 2)', 1500);
setTimeout('addFigures(figures.horse.black.position, figures.horse.black.class, 2)', 1800);
setTimeout('addFigures(figures.soldier.white.position, figures.soldier.white.class, 2)', 2100);
setTimeout('addFigures(figures.soldier.black.position, figures.soldier.black.class, 2)', 2400);
setTimeout('addFigures(figures.queen.white.position, figures.queen.white.class, 1)', 2700);
setTimeout('addFigures(figures.queen.black.position, figures.queen.black.class, 1)', 3000);
setTimeout('addFigures(figures.king.white.position, figures.king.white.class, 1)', 3300);
setTimeout('addFigures(figures.king.black.position, figures.king.black.class, 1)', 3600);


/**
 * Objects for figures.
 * @type {{pawn: {white: {position: [*], class: string}, black: {position: [*], class: string}},
 * castle: {white: {position: [*], class: string}, black: {position: [*], class: string}},
 * horse: {white: {position: [*], class: string}, black: {position: [*], class: string}},
 * soldier: {white: {position: [*], class: string}, black: {position: [*], class: string}},
 * queen: {white: {position: [*], class: string}, black: {position: [*], class: string}},
 * king: {white: {position: [*], class: string}, black: {position: [*], class: string}}}}
 */
var figures = {
    pawn : {
        white : {
            position: [8, 9, 10, 11, 12, 13, 14, 15],
            class : "whitePawn",
        },
        black : {
            position : [48, 49, 50, 51, 52, 53, 54, 55],
            class : 'blackPawn',
        }
    },
    castle : {
        white : {
            position: [0, 7],
            class : 'whiteCastle'
        },
        black : {
            position: [56, 63],
            class : 'blackCastle'
        }
    },
    horse : {
        white : {
            position: [1, 6],
            class : 'whiteHorse'
        },
        black : {
            position: [57, 62],
            class : 'blackHorse'
        }
    },
    soldier : {
        white : {
            position: [2, 5],
            class : 'whiteSoldier'
        },
        black : {
            position: [58, 61],
            class : 'blackSoldier'
        }
    },
    queen : {
        white : {
            position: [4],
            class : 'whiteQueen'
        },
        black : {
            position: [60],
            class : 'blackQueen'
        }
    },
    king : {
        white : {
            position: [3],
            class : 'whiteKing'
        },
        black : {
            position: [59],
            class : 'blackKing'
        }
    },
}

/**
 * Universal function for adding figures.
 * @param pos - position on board
 * @param cls - added class
 * @param quantity - how much figures adds
 */
function addFigures(pos, cls, quantity) {
    for (var i = 0; i < quantity; i++) {
        wrapper.getElementsByClassName('sqr')[ pos[i] ].classList.toggle(cls);
    }
}

/**
 * Adds lines of squares. Adds by 8 squares to line. Check for black and white sqr.
 * @param line - number of line. needs to check black or white sqr will be added
 */
function addLineSqr(line) {
    for (var i = 1; i <= 8; i++) {
        var sqr = document.createElement('div');

        if( (i + line) % 2 == 0) {
            sqr.classList.add('flexed', 'darkSqr', 'sqr');
            wrapper.appendChild(sqr);
        } else {
            sqr.classList.add('flexed', 'lightSqr', 'sqr');
            wrapper.appendChild(sqr);
        }
    }
}

/**
 * Adding letters to squares form array
 */
function addLetters() {
    var lettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    for (var i = 0; i < 8; i++) {
        document.getElementsByClassName('sqrLetters')[i].innerText = lettersArr[i];
    }
}

/**
 * Adding letters to letter squares.
 */
function addNumbers() {
    for (var i = 0; i < 8; i++) {
        document.getElementsByClassName('sqrNumbers')[i].innerText = (i + 1);
    }
}