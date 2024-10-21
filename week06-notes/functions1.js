function normalize(word) {
    let first = word.slice(0, 1);
    let rest = word.slice(1)
    return first.toUpperCase() + rest.toLowerCase();
}

let input = prompt("Enter you list of fruits (separated by comma):")
let fruits = input.split(',')
let normFruits = []

for(let fruit of fruits){
    normFruits.push(normalize(fruit.trim()));
}

console.log(normFruits.join(', '))