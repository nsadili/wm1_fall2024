// let names = prompt();

// let res = names.split(",").
//                         map( x => x.trim() ).
//                         filter(name => name[0] == name[0].toLowerCase())
//                         .forEach(word => console.log(word))


let numbers = [3,6,22,7,9,0,3,2]
let min = Infinity, max = -Infinity
for(let n of numbers){
    if(n > max) max = n;
    if(n < min) min = n;
}