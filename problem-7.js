((primePos) => {
  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num !== 1;
  }
  let primes = [2];
  while (primes.length < primePos) {
    let prime = primes[primes.length - 1] + 1;
    while (!isPrime(prime)) {
      prime ++;
    }
    primes.push(prime);
  }
  console.log(primes[primes.length - 1]);
})(10001);
