// ES5

function greetCustomer() {
    console.log("Hello Kartik");
}

greetCustomer();

//concatination

function kartik(concatination) {
    console.log("hello "+ concatination);
}

kartik('world');
kartik('world 2');

// funtion using if else

function pawar(age) {
    if (age > 18) {
        console.log(true)
    } else {
        console.log(false)
    }
}
var person1 = pawar(14);

// another way to use if else

function yash(age) {
    return age > 18 ? true : false;
}

var person2 = yash(20);
console.log(person2);

// Anonymous function

var test = function (marks) {
    return marks % 2 === 0 ? "passed" : "failed";
}
console.log(test(100));

// import function
import { PrintFullName } from "./Export Functions2";