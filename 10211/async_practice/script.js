
console.log("Timer starts");


// setTimeout(
//     () => console.log("Timeout is over!"),
//     2000)


// setInterval(
//     () => console.log("interval is over!"),
//     500)


console.log("Timer ends");


function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }

function calculate(num1, num2, callbackOperator, callbackNext) {
    let res = callbackOperator(num1, num2);
    callbackNext(res);
    return res;
}


function display(text) {
    console.log(`*****${text}*****`);
}

function display2(text) {
    console.log(`-----${text}----`);
}

let res = calculate(5, 4, add, display2);


