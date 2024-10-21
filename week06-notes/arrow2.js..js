function isEven(n){
    return n % 2 == 0; 
}

let newF = eval("(function isEven(n){ return n % 2 == 0; })")

let isEvenArrow = (n) => n % 2 == 0;

function testForUpperCaseStart(word) {
    return word.charAt(0) == word.charAt(0).toUpperCase();
}

let names = ["Nuraddin", "sama", "Aliya", "seymur"]

// for(let name of names){
//     if(testForUpperCaseStart(name))
//         console.log(name)
// }

// for(let name of names.filter(  word =>   word.charAt(0) == word.charAt(0).toLowerCase()    )){
//     console.log(name)
// }

names.filter(word =>   word.charAt(0) == word.charAt(0).toLowerCase())
     .forEach(w => console.log(w))