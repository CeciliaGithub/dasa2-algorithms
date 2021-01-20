// Factorial - n! = n x (n-1) x .... x 1

const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1); // recursively calls the factorial function
  }
};
console.log(factorial(10));
