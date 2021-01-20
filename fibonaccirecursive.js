// Prints the fibonacci series
const printFibSeries = (n) => {
  let n1 = 0,
    n2 = 1,
    nextTerm;

  console.log("Fibonacci Series:");

  for (let i = 0; i < n; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
};
printFibSeries(3);

// Calculate the Fibonnaci values recursively
const fibonacci = (num)=> {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(5));
