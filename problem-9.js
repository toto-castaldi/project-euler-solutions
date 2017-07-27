((sum) => {
  const a = (n,m) => m*m - n*n;
  const b = (n,m) => 2*m*n;
  const c = (n,m) => m*m + n*n;
  const correct = (n,m) => (Math.pow(a(n,m),2) + Math.pow(b(n,m),2) === Math.pow(c(n,m),2)) && (a(n,m) + b(n,m) + c(n,m) === sum);
  let n = 0;
  let m;
  while (!correct(n,m)) {
    n ++;
    m = n + 1;
    while (a(n,m) + b(n,m) + c(n,m) < sum) {
        m ++;
    }
  }
  console.log(a(n,m) , b(n,m) , c(n,m), '->', a(n,m) * b(n,m) * c(n,m));
})(1000);
