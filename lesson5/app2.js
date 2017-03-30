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
