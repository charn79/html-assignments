//first
var myArray = ["hello", "how", "are", "you"];
function addElement(array, element) {
    array.push(element);
    return array;
}
addElement(myArray, "?");
console.log(myArray);
//second
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits)
//third
let array1 = ["hello"];
let array2 = ["world"];
let array3 = array1.concat(array2)
console.log(array3)
// fouth
const fruitss = ["banana", "mango", "pineapple"];
let index = fruitss.indexOf("mango");
console.log(index)
//fifth
let fruitsss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let slice1 = fruitsss.slice(1, 3);
console.log(slice1)

//sixth
let text = "hello mike";
let result = text.toUpperCase();
console.log(result);
//seventh
let text1 = "HELLO MIKE";
let result1 = text.toLowerCase();
console.log(result1)
//eighth
let text2 = "how you doing";
let array4 = text2.split("", 9)
console.log(array4)
//ninth
let text3 = "how is everything";
let result2 = text3.charAt(7)
console.log(result2)
//tenth
let text4 = "good to see you";
let result3 = text4.substring(9)
console.log(result3)
// eleventh
function doubleArray(array) {
    var doubledArray = array.map(function (element) {
        return element * 2;
    });
    return doubledArray;
}
var myArray = [1, 2, 3, 4];
var doubledArray = doubleArray(myArray);
console.log(doubledArray);
//twelth
let ages = [9, 7, 21, 45, 2, 5]
let result4 = ages.filter(checkadult)
function checkadult(ages) {
    return ages >= 18;
}
console.log(result4)
//thirteenth
function logArrayElements(array) {
    array.forEach(function (element) {
        console.log(element);
    });
}
var myArray = [1, 2, 3, 4];
logArrayElements(myArray);

//fourteenth
//a)
var originalString = 'Hello, World!';
var reversedString = reverseString(originalString);
function reverseString(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}
console.log(reversedString);
//b)
var originalString = 'Hello, World!';
var reversedString = reverseString(originalString);
function reverseString(str) {
    var reversed = str.split('').reverse().join('');
    return reversed;
}
console.log(reversedString);
//fifteen
function palindromeis(palindrome){
    for (let i=0;i<palindrome.length/2;i++){
        if(palindrome[i]!=palindrome[palindrome.length-1-i]){
            return false;
        }
    }
    return true;
}
console.log(palindromeis("mayam"));
//sixteen
function findMaxNumber(array) {
    if (array.length === 0) {
        return undefined; 
    }

    var max = array[0]; 

    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}
var numbers = [4, 2, 9, 7, 5];
var maxNumber = findMaxNumber(numbers);
console.log(maxNumber);



