/* Поиск элемента */

let block = document.querySelector('.block');

// let mainBlock = document.querySelector('#main-block');
let mainBlock = document.getElementById('main-block');

console.log(mainBlock);

/* Стилизация элементов */

block.style.backgroundColor = 'green';

// mainBlock.className = 'block block_orange';
mainBlock.classList.add('block_orange');

/* Создание и удаление элемента */
let otherBlock = document.createElement('div');
otherBlock.textContent = 'Other block';
otherBlock.classList.add('block');

document.body.append(otherBlock);
otherBlock.remove();

/* Работа с предками и потомками */

let mainList = document.getElementById('main-list');
let thirdLink = mainList.children[2].querySelector('a');

for (let listItem of mainList.children) {
   console.log(listItem);
}

console.log(thirdLink.closest('ul'));