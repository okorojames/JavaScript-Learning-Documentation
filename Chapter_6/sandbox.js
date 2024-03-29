// DOM (Document Object Model)
// const para = document.querySelector("div.error");
// console.log(para);
// selecting all the p elements
/*const paras = document.querySelectorAll("p");
// just like an array we can aslo use forEach method
// e.g
paras.forEach((para) => {
  console.log(para);
});
//
const errors = document.querySelectorAll(".error");
errors.forEach((error) => {
  error.style = "color: red";
  error.style.fontFamily = "Josefin sans";
});
console.log(paras[0]);*/
//
//
/*// get an element by id
const title = document.getElementById("page-title");
console.log(title);
//
//

// get an element by className
const errors = document.getElementsByClassName("error");
console.log(errors);
// you can't use forEach method on HTML collection
//
//
// // get an element by tagName
const paras = document.getElementsByTagName("p");
console.log(paras);*/
//
//
//
//
// Adding and chnaging content
/*const para = document.querySelector("p");
// innerText display the text inside the element we selected
// console.log(para.innerText);
// updating the innerText
para.innerText = "Ninjas are awesome";

const paras = document.querySelectorAll("p");
paras.forEach((para) => {
  para.innerText += " new text";
});*/
//
// Changing the html elements
//
/*const content = document.querySelector(".content");
// console.log(content.innerHTML);
// content.innerHTML += "<h2>This is a new h2</h2>";
//
//
const people = ["mario", "lugi", "yoshi"];
people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});*/
//
//
//
//
//
/*// geting and setting attribute
const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.thenetninja.co.uk");
link.innerText = "The netNinja Website";
const mssg = document.querySelector(".error");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("class", "success");
mssg.innerText = "success";
mssg.setAttribute("style", "color: green;");
//
//
const newText = "Hi, ";
const click = document.querySelector(".click-this");
// console.log(click);
click.addEventListener("click", function () {
  if (click.innerText === "hello") {
    click.innerHTML = `<span>Hi, </span>You clicked me`;
    put.innerText = newText;
  } else if (click.innerHTML === click.innerHTML) {
    click.innerText = "hello";
  }
});*/
//
//
//
//
//Changing css styles using DOM
/*const title = document.querySelector("h1");
// so using the setAttribute and styling the element will completely override the already existing styles.
// title.setAttribute("style", "margin: 50px");
//
// using the javascript style property is the alternative way to style the element without overriding the already existing styles.
console.log(title.style);
console.log(title.style.color);
title.style.margin = "50px";
title.style.color = "crimson";
title.style.fontSize = "60px";
title.style.margin = "";*/
//
//
//
// ADING AND REMOVING CLASSES
// const content = document.querySelector("p");
// console.log(content.classList);
//
//
// ASSIGNMENT
/*const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph) => {
  if (paragraph.textContent.includes("success")) {
    paragraph.classList.add("success");
  } else if (paragraph.innerText.includes("error")) {
    paragraph.classList.add("error");
  } else if (
    paragraph.textContent.includes("error") &&
    paragraph.textContent.includes("success")
  ) {
    paragraph.classList.add("error", "success");
  }
});
const title = document.querySelector("title");*/
//
//
//
//
/*const article = document.querySelector("article");
// console.log(article.children)
// console.log(Array.from(article.children));
// console.log(article.children)
// Array.from(article.children).forEach(child => {
//   child.classList.add('article-elements')
// })
const title = document.querySelector('h2')
console.log(title.parentElement.parentElement)
console.log(title.nextElementSibling)
console.log(title.previousElementSibling)
// 
console.log(title.nextElementSibling.parentElement.children)*/
//
//
// CLICK EVENTS AND FUNCTION
//
//
// const button = document.querySelector('button')
// button.addEventListener('click', () => {
//   console.log("you clicked me!")
// })
/*const ul = document.querySelector('ul')
// ul.remove()
const items = document.querySelectorAll('li')
const button = document.querySelector('button')
// 
button.addEventListener('click', () => {
  // ul.innerHTML += `<li>Something new</li>`
  const li = document.createElement('li')
  li.textContent = 'Something new'
  // ul.append(li)
  ul.prepend(li)
})
//
/*items.forEach(item => {
  item.addEventListener('click', (e) => {
    // console.log(e.target)
    // console.log(item)
    // e.target.style.textDecoration = "line-through"
    e.target.remove()
  })
})*/
/*ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'li') {
    e.target.remove()
  }
})*/
//
// MORE DOM EVENTS
//
// COPY EVENT
// 
const copy = document.querySelector('.copy-me')
copy.addEventListener('copy', () => {
  console.log('oi, my content is copyright')
})
//
// MOUSE MOVE EVENT
// 
const box = document.querySelector('.box')
box.addEventListener('mousemove', (e) => {
  // console.log(e)
  // console.log(`offsetX ${e.offsetX}`)
  // console.log(`offsetY ${e.offsetY}`)
  box.textContent = `x pos - ${e.offsetX}   y pos - ${e.offsetY}`
})
//
//
// SCROLL EVENT
// 
document.addEventListener('wheel', (e) => {
  console.log(e.pageX, e.pageY)
})