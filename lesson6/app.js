window.onload = function () {
    var currentPic;    
    var gallary = document.getElementById('gallary');
    gallary.addEventListener('click', changeBigPicture);

    document.getElementById('prevPicArrow').addEventListener('click', prevPic);
    document.getElementById('nextPicArrow').addEventListener('click', nextPic);

    var goods = document.getElementsByClassName('goods')[0];

    goods.addEventListener('click', addToCart);
}

function changeBigPicture() {
    var bigPic = document.getElementById('bigSizeImg');
    var eventTarget = document.createElement('img');

    eventTarget.src = event.target.src;
    eventTarget.classList.add('bigSizeImg')

    currentPic = event.target;

    bigPic.innerHTML = '';
    bigPic.appendChild(eventTarget);
}

function prevPic(){
    var bigPic = document.getElementById('bigSizeImg');
    var newImage = new Image();
    var previous;

    if(previous = currentPic.previousElementSibling) {
        newImage.src = previous.src;
        currentPic = previous;
        newImage.classList.add('bigSizeImg')
    } else {
        currentPic = currentPic.parentElement.lastElementChild;
        newImage.src = currentPic.src;
        newImage.classList.add('bigSizeImg')
    }

    bigPic.innerHTML = '';
    bigPic.appendChild(newImage);
}

function nextPic(){
    var bigPic = document.getElementById('bigSizeImg');
    var newImage = new Image();
    var next;

    if(next = currentPic.nextElementSibling) {
        newImage.src = next.src;
        currentPic = next;
        newImage.classList.add('bigSizeImg')
    } else {
        currentPic = currentPic.parentElement.firstElementChild;
        newImage.src = currentPic.src;
        newImage.classList.add('bigSizeImg')
    }
    
    bigPic.innerHTML = '';
    bigPic.appendChild(newImage);
}


function addToCart(event){
    var item = event.target.cloneNode(true);
    totalSum = document.getElementById('totalSum'),
    cart = document.getElementsByClassName('cart')[0];
    
    
    cart.appendChild(item);

    
    for(var i = 0, sum = 0; i < cart.children.length; i++) {
        sum += parseInt( cart.children[i].getAttribute('value') );
    }

    totalSum.innerHTML = "Сумма покупок : " + sum + " рублей."   

}



