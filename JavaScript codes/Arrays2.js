// SORTING AND CONCATINATON

const fruits = ["Orange", "Apple", "Kivi", "Mango"];
console.log(fruits);
fruits.sort();
fruits.reverse();
console.log(fruits);

const axis = [22, 2, 10, 17, 32.74];
console.log(axis);
axis.sort()
console.log(axis);
// axis.reverse();
axis.sort(function (a, b) {
    return a - b;
});
console.log(axis);

// concatination

const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8,];
const result = num1 + num2;
console.log(result);
console.log(num1.concat(num2));