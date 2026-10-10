// Naya problem add karna ho: neeche ek object copy karo, id badhao.
// code ko backticks ( ` ) ke andar likho. answer mein HTML chalta hai.
const PROBLEMS = [
  {
    id: 1,
    topic: "Arrays",
    title: "Flatten a nested Array",
    answer: "Recursion use karo: agar item array hai to usko dobara <code>solution()</code> mein bhejo, warna result mein push karo.",
    code: `let arr = [1,2,[3,4,[5],6],7,8,[9],10]

function solution(arr){
  let result = [];
  for(let item of arr){
    if(Array.isArray(item)){
      result = [...result, ...solution(item)]
    } else {
      result.push(item)
    }
  }
  return result
}

solution(arr)`
  },
  {
    id: 2,
    topic: "Array",
    title: "count occurence of each item in array?",
    answer: "See code in example",
    code: `
    let fruits = ["apple", "banana", "mango", "grapes", "banana", "grapes"];
let result = {};
for (let item of fruits) {
  if (result[item]) {
    result[item] = result[item] + 1;
  } else {
    result[item] = 1;
  }
}
console.log(result);
`
  },
  {
    id: 3,
    topic: "Array",
    title: "Fizz,Buzz, fizzBuzz problem?",
    answer: "see code in example",
    code: `let num = 100;
let fizz = [];
let buzz = [];
let fizzBuzz = []
for(let i = 1 ; i <= num;i++){
  // console.log(i) 
  if(i % 15 === 0){
    console.log('FizzBuzz')
    fizzBuzz.push(i)
  }
  else if(i % 3 ===0){
    console.log('Fizz')
    fizz.push(i)
  }
  else if(i % 5 === 0){
    console.log('buzz')
    buzz.push(i)
  }
  else{
    console.log(i)
  }

}

console.log(fizz)
console.log(buzz)
console.log(fizzBuzz)
`
  },
  {
    id: 4,
    topic: "Array",
    title: "Remove duplicate from array ?",
    answer: "see in example",
    code: `let arr = ['apple','mango','apple','banana','mango','orange']
console.log(arr)

let unique = [];
for(let item of arr){
   if(!unique.includes(item)){
      unique.push(item)
   }
}
console.log(unique)`
  },
  {
    id: 5,
    topic: "DOM",
    title: "What is a child in the DOM?",
    answer: "When one node is contained directly inside another node, the contained node is its child. The containing node is the parent.",
    code: `<body>
  <div>This div is a child of body.</div>
</body>`
  },
  {
    id: 6,
    topic: "DOM",
    title: "What is a sibling in the DOM?",
    answer: "Siblings are nodes that share the same parent. For example, three paragraph elements inside one div are siblings.",
    code: `<div>
  <p>First</p>
  <p>Second</p>
  <p>Third</p>
</div>`
  },
  {
    id: 7,
    topic: "DOM",
    title: "What does the children property return?",
    answer: "<code>children</code> returns a live HTMLCollection containing the element nodes that are direct children of an element. It does not include text or comment nodes.",
    code: `const parent = document.getElementById("parent");
const children = parent.children;
console.log(children);`
  },
  {
    id: 8,
    topic: "DOM",
    title: "How can we access elements using document?",
    answer: "Use DOM methods such as <code>getElementById()</code>, <code>getElementsByClassName()</code>, <code>querySelector()</code>, and <code>querySelectorAll()</code> to select elements.",
    code: `const menu = document.getElementById("menu");
const items = document.querySelectorAll("#menu li");`
  },
  {
    id: 9,
    topic: "DOM",
    title: "What are querySelector() and querySelectorAll()?",
    answer: "<code>querySelector()</code> returns the first element matching a CSS selector. <code>querySelectorAll()</code> returns a static NodeList of all matching elements.",
    code: `const firstParagraph = document.querySelector("p");
const allParagraphs = document.querySelectorAll("p");`
  },
  {
    id: 10,
    topic: "DOM",
    title: "What is the difference between innerHTML, innerText, and textContent?",
    answer: "<code>innerHTML</code> reads or sets HTML markup; <code>innerText</code> represents rendered text; <code>textContent</code> reads or sets text without interpreting it as HTML.",
    code: `element.innerHTML = "<strong>Hello</strong>";
element.textContent = "Plain text";`
  },
  {
    id: 11,
    topic: "DOM",
    title: "What is a DOM tree?",
    answer: "A DOM tree is the hierarchical representation of the page. The <code>html</code> element contains <code>head</code> and <code>body</code>; those contain their own child nodes.",
    code: `html
├── head
│   ├── title
│   └── link
└── body
    └── div
        ├── h1
        └── p`
  }
];
