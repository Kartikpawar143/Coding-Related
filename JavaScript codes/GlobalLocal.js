// var Fullname = "Kartik Pawar"


// function greet() {
//     var Fullname = "Siddharth 123"
//     console.log(Fullname);
// }
// greet();

// function greet2() {
//     var age = 18;
//     var lastname = 'pawar'
//     console.log(lastname);
//     console.log(age);
// }
// greet2();


function num1(number1){
    const result = number1 * 2;
    function num2() {
        return result * 3;
    }
    const resp = num2();
    console.log(resp);
}

num1(10);