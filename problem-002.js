((max) => {
  let fibonacci = 1;
  let prevFibonacci = 1;
  let result = 0;
  while (fibonacci < max) {
    let last = fibonacci + prevFibonacci;
    prevFibonacci = fibonacci;
    fibonacci = last;
    if (fibonacci < max && (fibonacci % 2) === 0) result += fibonacci;
  }
  console.log(result);
})(4000000);
