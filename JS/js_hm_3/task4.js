let array = [-21, -15, 3, 8, -9, -1, 0 , 1, 2, 3, 7, 9, -3, 12, 19];

function filterRange(array, a, b) {
    let massRange = [];
    for (let i = 0; i < array.length; i++) {

        if ((array[i] >= a) && (array[i] <= b))
        massRange.push(array[i]);
    }

    console.log("Massive with limits:" + a + " and " + b);
    console.log(massRange);
}


let a = -9;
let b = 3;


filterRange(array, a, b);