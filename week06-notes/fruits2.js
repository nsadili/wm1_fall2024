function normalizeWord(word){
    word = word.trim();
    let firstChar = word.slice(0, 1);
    let restChars = word.slice(1);

    return firstChar.toUpperCase() + restChars.toLowerCase();
}

let fruitsText = prompt("Enter fruit names separated by comma")

let fruitNames = fruitsText.split(",")
let normalizedFruitNames = []

for(let fruitName of fruitNames){
    normalizedFruitNames.push(normalizeWord(fruitName))
}

console.log(normalizedFruitNames.join(", "))