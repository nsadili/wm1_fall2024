let input = prompt("Enter a word")

function normalizeWordV1(word){
    let firstChar = word.slice(0, 1);
    let restChars = word.slice(1);

    return firstChar.toUpperCase() + restChars.toLowerCase();
}

let normalizeWordV2 = function(word){
    let firstChar = word.slice(0, 1);
    let restChars = word.slice(1);

    return firstChar.toUpperCase() + restChars.toLowerCase();
}

let normalizeWordV22 = normalizeWordV2;

console.log(normalizeWordV2(input))
