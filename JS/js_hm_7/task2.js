let button = document.createElement('button');
button.setAttribute('id', 'hider');
button.innerHTML = 'Click ';
document.body.appendChild(button);


let textElement = document.createElement('div'); //div block
textElement.innerHTML = 'I will disapear when u click the button';
document.body.appendChild(textElement);
textElement.setAttribute('id', 'text');

document.getElementById('hider').onclick = function() {
    document.getElementById('text').hidden = true;
  }