let x = prompt ("Type any number grater than 0");

if(x >= 1){
  let sum = 0;
    for(let i = 0; i <= x; i++){
        sum = sum + i;
    }

    console.log("Sum res = " + sum);

} else {
    console.log("Your number is not grater than 0");
}