function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }


pressTheButton.onclick = function () {
    let arrayElements = document.getElementsByTagName('li');

    for (let i = 0; i < arrayElements.length; i++) {
        arrayElements[i].innerHTML = makeid();
    }
}

// for showing number 'li' elements
let num = 0;
let arrayElements = document.getElementsByTagName('li');
for (let i = 0; i < arrayElements.length; i++) {
    num++;
}
console.log('The number of list elements is: ' + num)