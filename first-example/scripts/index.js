// The first thing that we are going to do is get the app element and _cache_ it
// so we are going to get the app element from the html (use the DOM) and save it in to a variable

// ========== getElementById ==========
// because in the html, we can see that "app" is an id, we can use getElementById
// the syntax for this is 
//      document.getElementById('id_name');
// we also need to save this as a variable to do something with it in js

const app = document.getElementById("app");
// console.log(app.innerText);
// console.log(app);
// console.log(app.childElementCount);

// ========== getElementsByName ==========
// this returns a node list which acts like an array of nodes
// again, we need to CACHE this node list in order to be able to acces it in our script
// that means, save it to a variable
// the syntax for this is
//      document.getElementsByName('name_in_html_attribute')
const selects = document.getElementsByName('selectBy');
// console.log(selects);

// ========== querySelector ==========
// ***** this is an html element, so the name is just in ''
//          NOTE that this only gets the first <code> element, even though there are multiple
//              we will learn how to get multiple html (or other) elements soon
const codeEl = document.querySelector('code');
// console.log('I am looking at codeEl')
// console.log(codeEl);
// console.log(codeEl.parentNode);
// console.log(codeEl.childNodes);
// console.log(codeEl.nextElementSibling);
// console.log('I am done looking at codeEl');

const cssSelect = document.querySelector('#cssSelect');
// console.log(cssSelect);

const firstSelect = document.querySelector("input[type=checkbox]");
// console.log(firstSelect);

const inputs = document.getElementsByTagName('input');
// console.log(inputs);

// this is a for..of loop, so it can iterate over a collection
// console.log('we are iterating over a collection');
// for (let _individual_element_ of _collection_)
for (let input of inputs) {
    // console.log(input);
}

const codeEls = document.querySelectorAll('code');
// console.log('all code elements');
// console.log(codeEls);
for (let code of codeEls) {
    // console.log(code);
}

// ========== EXAMPLES of navigating between elements ==========
// ***** look at properties related to child nodes
//          childNodes[n]
//          firstChild
//          lastChild
const listEl = document.querySelector('ul');
console.log(listEl);
console.log(listEl.childNodes)
for (let i=0; i<7; i++) {
    console.log(listEl.childNodes[i]);
}
console.log(listEl.previousElementSibling);
console.log(listEl.nextElementSibling);

const listItems = document.querySelectorAll('li');
console.log(listItems);

for (let listItem of listItems) {
    console.log('in for of loop');
    console.log(listItem);
    console.log('parent node');
    console.log(listItem.parentNode);
    console.log(listItem.childNodes);
    console.log(listItem.firstChild);
    console.log(listItem.firstElementChild);
}