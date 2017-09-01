((digits) => {
  let result = { a: -1, b: -1};
  const isPalindrome = (i) => {
    const iStr = (i + '');
    const l = Math.floor(iStr.length / 2);
    for (let j = 0; j < l; j ++) {
        if (iStr[j] !== iStr[iStr.length - j - 1]) return false;
    }
    return true;
  };
  for (let a = Math.pow(10,digits - 1); a <= (Math.pow(10,digits) -1); a++) {
    for (let b = Math.pow(10,digits -1); b <= (Math.pow(10,digits) -1); b++) {
      if (isPalindrome(a*b) && (result.a + result.b) < (a + b)) {
        result.a = a;
        result.b = b;
      }
    }
  }
  console.log(result, result.a * result.b);

})(3);
