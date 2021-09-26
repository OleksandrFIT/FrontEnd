//змінна з операцією

let operation;

let result;

//функція розрахунку
function plus(){

     //змінна для результата

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    result = num1 + num2;

    document.getElementById("result").innerHTML = result

}

function minus(){

    //змінна для результата

   let num1 = Number(document.getElementById("num1").value);
   let num2 = Number(document.getElementById("num2").value);

   result = num1 - num2;

   document.getElementById("result").innerHTML = result

}


function multiply(){

    //змінна для результата

   let num1 = Number(document.getElementById("num1").value);
   let num2 = Number(document.getElementById("num2").value);

   result = num1 * num2;

   document.getElementById("result").innerHTML = result

}

function devide(){

    //змінна для результата

   let num1 = Number(document.getElementById("num1").value);
   let num2 = Number(document.getElementById("num2").value);

   result = num1 / num2;

   document.getElementById("result").innerHTML = result

}




// switch(operation){
    //     case '+': 
    //         result = num1 + num2;
    //     break;

    //     case '-': 
    //         result = num1 - num2;
    //     break;

    //     case '*': 
    //         result = num1 * num2;
    //     break;

    //     case '/': 
    //         result = num1 / num2;
    //     break;
    // }

    // document.getElementById("result").innerHTML = result;