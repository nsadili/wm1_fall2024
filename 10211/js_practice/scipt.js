let items = document.querySelectorAll('#my-fav-movies > li');

for (let idx = 0; idx < items.length; idx++) {
    if (idx % 2 == 0)
        items[idx].classList.add("blue-text");
    else
        items[idx].classList.add("red-text");
}


const BASE_URL = 'https://picsum.photos';
let width = 50;
let height = 50;
let imageEl = document.getElementsByTagName("img")[0];

imageEl.src = `${BASE_URL}/${width}/${height}`