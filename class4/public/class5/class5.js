function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let i=isEven(7);
console.log (i);

//second

var students=[
    {name:"hulk", age: "45"},
    {name:"peter", age: "16"},
    {name:"strange", age: "29"},
];
for (var p=0; p<3; p++) 
{
    console.log(students[p].name);
}
//third
let users=[
    {username:"peter", email:"parker"},
    {username:"john", email:"abraham"},
    {username:"bheem", email:"chota"},
];
let a=0;
for (var q=0; q<users.length; q++)
{
    if(users[q].username === 'john'){
        a=users[q].email;
    console.log(a);
    }
}
//fourth
function ispositive (num) {
    return(num >=5) ? "true" : "false";
}
let positive =ispositive(-2);
console.log(positive);

//fifth
let grade=85;
let score=(grade>=60) ? "pass" : "fail";
console.log(score);

//sixth
function palindromeis(palindrome){
    for (let i=0;i<palindrome.length/2;i++){
        if(palindrome[i]!=palindrome[palindrome.length-1-i]){
            return false;
        }
    }
    return true;
}
console.log(palindromeis("malayalam"));
//seventh
const numbers=[1,2,3,4];
let sum=0;
for (let i=0;i<numbers.length;i++){
    sum+=numbers[i];
}
console.log(sum);

//eighth
let name ="bob";
let d= (name= "peter") ? "hello bob":"who are you?";
console.log(d);

const num
