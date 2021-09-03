let x = prompt("Type a: ");
let y = prompt("Type b: ");

let a = prompt("Type a symbol of an expression: ");

function expression(x, y, s){
    let res = 0;

    switch(s){
        case "+": 
            res = x + y;
        break;

        case "-": 
            res = x - y;
        break;

        case "*": 
            res = x * y;
        break;

        case "/": 
            res = x / y;
        break;

        default: 
            throw Error('The sign is not correct');
    }

    try {
        if (Number.isNaN(res)) {
            throw Error('Values are not correct');
        }   
    } catch (error) {
        console.log(error);
    } 

    console.log(x + ' ' + ' ' + s + ' ' + y + ' = ' + res );
}

expression(x, y , a);