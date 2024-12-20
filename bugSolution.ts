function printNumber(num: number): void {
  console.log(num);
}

function processNumber(num: number | string): void {
  if (typeof num === 'number') {
    printNumber(num); 
  } else if (typeof num === 'string') {
    console.log(`String value: ${num}`); // Handle string case explicitly
  } else {
    console.log('Invalid input type');
  }
}

processNumber(10); // Correct
processNumber('hello'); // Correct
processNumber(true); // Correct - handles unexpected input types

//The solution adds more explicit checks to handle potential non-number and non-string types, as well as explicitly handles the string type to avoid the error.