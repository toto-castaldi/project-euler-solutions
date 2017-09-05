((divisorCount) => {
  let n = 1;
  const triangular = n => n*(n+1)/2;
  const factorizationWithPrime = n => {
    let result = {};
    let lastFactor = 2;
    while (n > 1) {
      while (n%lastFactor === 0) {
        if (!result[lastFactor]) result[lastFactor] = 0;
        result[lastFactor] += 1;
        n = n / lastFactor;
      }
      lastFactor ++;
    }
    return result;
  };
  const countDivisor = n => {
    let factorization = factorizationWithPrime(n);
    return Object.keys(factorization).reduce((result, elem) => {
      return result * (factorization[elem] +1);
    },1);
  };
  while (countDivisor(triangular(n)) < divisorCount) {
    n+=1;
  }
  const t = triangular(n);
  console.log(t);
  console.log(factorizationWithPrime(t));
  console.log(countDivisor(t));
})(500);
