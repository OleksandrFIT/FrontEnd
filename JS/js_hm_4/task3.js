let school = [
    { age: 16, class: 'English' },
    { age: 18, class: 'Paper works' },
    { age: 15, class: 'Math' },
    { age: 16, class: 'Pre Calc' },
    { age: 16, class: 'Gym' },
    { age: 15, class: 'JROTC' },
    { age: 18, class: 'OutdoorEd' },
    { age: 17, class: 'Chemistry' },
    { age: 18, class: 'Math' },
    { age: 17, class: 'Gym' }
];

console.log(school);

let arrGroupName = school.map(function (school) {
    return school.class;
});
console.log(arrGroupName);


let arrStudentsAge = school.map(function (studAge) {
    return studAge.age;
});
console.log(arrStudentsAge);


let ageSum = arrStudentsAge.reduce(function (sum, simpleAge) {
    return sum + simpleAge;
});
console.log(ageSum);

function isAdult (studAge) {
    return studAge < 18;
}

let checkingAge = arrStudentsAge.some(isAdult);


if (checkingAge){

    console.log('There are not adult students in class');

}  else{
    console.log('All the students are adult');
}