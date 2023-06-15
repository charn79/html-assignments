// first
const square = num => (num) ** 2
const num = 5
const result = square(num)
console.log(result)
//second
function countWords(str) {
    let words = str.split('');
    return words.length;
}
const sentence = ("Hello, how are");
const wordCount = countWords(...sentence);
console.log(wordCount);
//third
class person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;

    }
}
const addperson = new person("john", 26, "333 coit road")
console.log(addperson)
// fourth
const evennumbers = numbers => numbers.filter(number => number % 2 === 0)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evennumbersare = evennumbers(numbers)
console.log(evennumbersare)
//fifth
let firstName, lastName;
[firstName, lastName] = ["John", "wick"]
console.log(firstName);
console.log(lastName);
//sixth
const firstlettercap = (str) => {
    if (typeof str !== "string" || String.length === 0) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
};
const str = 'hello, world!';
const capitalizedStr = firstlettercap(str);
console.log(capitalizedStr);
//seventh
let name = "John";
let age = 25;
let address = "123 Main St";

let formattedString = `
hi, my name is ${name}, i am  ${age} years old, i live at ${address}
`;
console.log(formattedString);
//eighth
function* fibonacci(limit) {
    let a = 0, b = 1;
  
    while (a <= limit) {
      yield a;
     [a, b] = [b, a + b];
    }
  }
  const limit = 100;
  const fibonacciSequence = [...fibonacci(limit)];
  console.log(fibonacciSequence);
  //ninth
  // Using let keyword
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log("let:", i);
    }, 1000);
  }
  
  // Using var keyword
  for (var j = 0; j < 3; j++) {
    setTimeout(function() {
      console.log("var:", j);
    }, 1000);
  }
  //tenth
  


