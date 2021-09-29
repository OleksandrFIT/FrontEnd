let styles = ['Jazz', 'Blues'];
console.log("First step: " + styles);

styles.push('Rock and Roll');
console.log("Second step: " + styles);

let neededElement = styles.length - 2;
styles.splice(neededElement, 1, 'Classics');
console.log("Third step: " + styles);

console.log("Deleted element: " + styles.shift());
console.log("Fourth step: " + styles);

styles.splice(0, 0, 'Rep', 'Reggae');
console.log("Fifth step: " + styles);