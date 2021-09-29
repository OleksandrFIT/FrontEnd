let button = document.createElement('button');
button.setAttribute('id', 'text');
button.innerHTML = 'Click ';
document.body.appendChild(button);


button.onclick = function () {
    document.body.querySelector('button').hidden = true;
};