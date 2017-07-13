((num) => {
  let maxPrime = 2;
  const maxPrimeThreshold = Math.sqrt(num);
  while ( num !== maxPrime && maxPrime < maxPrimeThreshold ) {
    if (Number.isInteger(num / maxPrime)) num = num / maxPrime; else maxPrime ++;
  }
  console.log(maxPrime);
})(600851475143);
//})(13195);
