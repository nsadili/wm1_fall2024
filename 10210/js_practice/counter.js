
let buttons = document.getElementsByTagName('button');
//let buttons = document.querySelectorAll('button');

// for (let i = 0; i < buttons.length; i++) {
//     console.log(buttons[i]);
// }

for (let btn of buttons) {
    // btn.onclick = handleCalcEvent;
    btn.addEventListener('click', handleCalcEvent);
}

document.getElementById('btnInc').addEventListener('click', additionTask)

setTimeout(() => {
    document.getElementById('btnInc').removeEventListener('click', additionTask)
}, 3000);

function additionTask() {
    console.log("btnInc clicked")
}

const counterEl = document.getElementById('counter');
counterEl.readOnly = true;
let counterValue = 10;
counterEl.value = counterValue;


function handleCalcEvent(event) {
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

let movieNames = ['Interstellar', 'Fight Club', 'Inception', 'John Wick', 'Titanic'];
const favMoviesEl = document.getElementById('favMovieList');

// let elementText = '';
// for (let movieName of movieNames) {
//     elementText += `<li>${movieName}</li>`;
// }
// favMoviesEl.innerHTML = elementText;

for (let movieName of movieNames) {
    let movieLi = document.createElement('li');

    movieLi.addEventListener('click', handleSelectMovie);

    movieLi.appendChild(document.createTextNode(movieName));
    favMoviesEl.prepend(movieLi);
}

function handleSelectMovie(event) {
    event.target.classList.toggle('selected-text');
}