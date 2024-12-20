function printNumber(num: number): void {
  console.log(num);
}

function processNumber(num: number | string): void {
  if (typeof num === 'number') {
    printNumber(num); // This line will cause an error if num is a string
  } else {
    console.log('Not a number');
  }
}

processNumber(10); // Correct
processNumber('hello'); // Correct

// The error happens if the type guard does not correctly narrow down the type of num.
// For example, if there is a mistake in the typeof check, TypeScript may not correctly infer the type of num, resulting in a runtime error.