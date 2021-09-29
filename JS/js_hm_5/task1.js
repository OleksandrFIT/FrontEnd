function bufferFunc() {
    
    var text = '';
    
    return function (value) {
        if (arguments.length == 0) {
            return text;
        } else{
            text += value;
        }
        
    };
};

var simpleBuffer = bufferFunc();

simpleBuffer('JavaScript ');
simpleBuffer('Вчити ');
simpleBuffer('Потрібно! ');

console.log(simpleBuffer());
