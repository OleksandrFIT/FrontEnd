function makeBuffer() {

    var text = '';

    function bufferFunction(value) {
        if (arguments.length == 0) { 
            return text;
        } else{
            text += value;
        }
        
    };

    bufferFunction.clear = function () {
        text = '';
    };

    return bufferFunction;
};

var bUffer = makeBuffer();

bUffer('Тест ');
bUffer('тебе не з’їсть!');
alert(bUffer());

bUffer.clear();
alert(bUffer());