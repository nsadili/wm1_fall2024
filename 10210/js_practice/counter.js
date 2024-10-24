let counterValue = 0;
const counterEl = document.getElementById('counter');
counterEl.readOnly = true;
counterEl.value = counterValue;

// document.getElementById('btnInc').onclick = handleBtnClick;
// document.getElementById('btnInc').onclick = anotherHandler;
document.getElementById('btnInc').addEventListener('click', handleBtnClick);
document.getElementById('btnInc').addEventListener('click', anotherHandler);


setTimeout(() => {
    document.getElementById('btnInc').removeEventListener('click', anotherHandler);
}, 2000);

// function () {
//     counterEl.value = ++counterValue;
// }

document.getElementById('btnDec').onclick = handleBtnClick;
// function () {
//     counterEl.value = --counterValue;
// }

document.getElementById('btnRes').onclick = handleBtnClick;
// () => counterEl.value = counterValue = 0;

function anotherHandler() {
    console.log("Another handler executed!")
}

function handleBtnClick(event) {
    switch (event.target.id) {
        case 'btnInc':
            counterEl.value = ++counterValue;
            break;
        case 'btnDec':
            counterEl.value = --counterValue;
            break;
        case 'btnRes':
            counterEl.value = counterValue = 0;
            break;
    }
}


//////////////////////////////////////////////////////////

const favMovieNames = ['Fight Club', 'Se7en', 'Green Book', 'Catch me if you can', 'Inseption']
const movieListEl = document.getElementById('movieList');

let newLi;
for (let movieName of favMovieNames) {
    newLi = document.createElement('li');
    // newLi.innerHTML = movieName;
    newLi.appendChild(document.createTextNode(movieName));
    newLi.addEventListener('click', handleLiClick);

    movieListEl.prepend(newLi);
}

function handleLiClick(event) {
    event.target.classList.toggle('selected-li');
}