var employeeSalaries= {
    firstEmployee : 850,
    secondEmployee : 200,
    thirdEmployee : 400,
    fifthEmployee : 120
}


let sum = 0;
let objLength= Object.keys(employeeSalaries).length;

for(key in employeeSalaries){
 sum = sum + employeeSalaries[key];
}


console.log('Summa equals= '+ sum);