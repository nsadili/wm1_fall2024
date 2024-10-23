let favBooks = document.querySelectorAll('.fav-books li');

for (let i = 0; i < favBooks.length; i++)
    if (i % 2 == 0)
        favBooks[i].classList.add('red-text');
    else
        favBooks[i].classList.add('blue-text');


let imgEl = document.querySelector('img');

const BASE_IMG_URL = "https://picsum.photos"
let width = 300;
let height = 200;

imgEl.src = `${BASE_IMG_URL}/${width}/${height}`;