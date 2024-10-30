// ***** we are going to make a table that has 5 rows and 10 columns
//          so, I am going to create variables for the numbers of rows and columns
const rows = 5;
const cols = 10;

const app = document.getElementById('app');
const table = document.createElement('table');

for (let r=0; r < rows; r++) {
    const tr = document.createElement('tr');
    for(let c=0; c<cols;c++) {
        const td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

app.appendChild(table);

const addChild = document.getElementById('addChild');

addChild.appendChild(document.createElement('ul'));
addChild.appendChild(document.createElement('div'))
addChild.appendChild(document.createElement('li'));

const classExample = document.getElementById('classExample');
const div = document.createElement('div');
classExample.appendChild(div);
div.innerHTML='hi';
div.className='foo';

console.log(div.outerHTML);
console.log(div.innerHTML);

div.classList.remove('foo');
div.classList.add('anotherclass');

console.log(div.outerHTML);

console.log(div.classList);

div.classList.toggle('visible');

console.log(div.classList);

console.log(div.classList.contains('foo'));
console.log(div.classList.contains('anotherclass'));