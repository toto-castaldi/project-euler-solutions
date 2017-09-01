((max) => {
  let primes = [...Array(max + 1)].map((e,i,a) => { return { value : i, prime : true}});
  let index = 2;
  while (index < primes.length) {
    let val = primes[index].value;
    let factor = 2;
    while (val * factor < primes.length) {
      primes[val * factor].prime = false;
      factor ++;
    }
    index ++;
  }
  primes = primes.slice(2);
  console.log(primes.reduce((result, element) => element.prime ? result += element.value : result, 0));
})(2000000);
