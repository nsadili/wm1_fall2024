

//option 1
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(data => console.log(data))


// option 2
async function fetchData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await res.json();
    console.log(data)
}

fetchData();