let arr = ['table', 'chair', 'chess', 'iphone', 'tv', 'remote controler', 'refrigirator', 'lamp'];

console.log(arr);


function find(arr, value) {
    if(arr.includes(value)){
        console.log(arr.indexOf(value));
    } else{
        console.log('-1');
    }
}

let value = 'tv';
find(arr, value);