  
let clickBtn = document.querySelector('#click-me');

// clickBtn.onclick = function sayHi() {
// 	alert('Hi!(2)');
// };

function sayEventListener() {
	alert('This is event listener');
}

document.addEventListener('click', (event) => {
	if (event.target.classList.contains('click-btn')) sayEventListener();
});

let nameField = document.querySelector('#name');
let nameOutput = document.querySelector('#name-output');

nameField.addEventListener('input', () => {
	nameOutput.textContent += nameField.value;
});

/*
<form onsubmit="myFunction()">
  Enter name: <input type="text">
  <input type="submit">
</form>

document.onscroll=function(){
alert("прокручування"); }

<form onreset="myFunction()">
  Enter name: <input type="text">
  <input type="reset">
</form>

object.oncontextmenu=function( event ){
// код функції, яка виконується коли відбувається подія
}; подія яка виникає коли викликається контекстне меню (зазвичай натискається права кнопка миші).



*/