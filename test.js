var readline = require('readline-sync');
var i = 10;
var input;

console.log("Hello Cloud9!");
console.log("i is " + i);

do {
    input = readline.question("Enter a number (or 'q' to quit): ");
    if (input === 'q') {
        console.log('OK, exiting.')
    }
    else{
        i += Number(input);
        console.log("i is now " + i);
    }
} while (input != 'q');

console.log("Goodbye!");

#write output to console    
console.log("Hello Cloud9!");

#in a loop print hello 9 times to console
for (var i = 0; i < 10; i++) {
    console.log("Hello");
}  

#write a function to take a number as input and return square root
function squareRoot(num) {
    return Math.sqrt(num);
}
