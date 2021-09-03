var employeeSalaries= {
    firstEmployee : 850,
    secondEmployee : 200,
    thirdEmployee : 400,
    fifthEmployee : 120
}


let sum = 0;
let objLength= Object.keys(employeeSalaries).length;
if(objLength != 0){
   for(key in employeeSalaries){
    sum = sum + employeeSalaries[key];
   }
} else{
    sum = null;
    console.log('Sum is= ' + sum);
}

console.log('Summa equals= '+ sum);