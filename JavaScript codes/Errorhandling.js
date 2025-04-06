// try
// catch
// finally
// throw

// var x = 10;
// try {
//     if (x%3 === 0){
//         console.log('kartik')
//     }
// } catch (error) {
//     console.log(error);
// }

// var x = 11;
// try {
//     x.toPrecision(5);
//     console.log(x);
// } catch (err) {
//     throw "Error: While setting precision to x ";
// }

var x = 10;
try {
    x = z + 1 * 2
    console.log(x);
} catch (error) {
    console.log(error.name);
} finally {
    console.log("Failed to convert");
}