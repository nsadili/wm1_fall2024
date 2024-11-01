
function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mult(x, y) { return x * y; }


function calc(a, b, operator, nextOperation) {
    let res = operator(a, b)
    nextOperation(res);
    return res;
}

function display1(text) {
    console.log(`***${text}***`)
}
function display2(text) {
    console.log(`###${text}###`)
}

calc(5, 10, mult, display2);
