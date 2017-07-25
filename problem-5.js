((min, max) => {
  const popOnes = (a => {
    return a.reduce((res, item) => {
      if (item !== 1) res.push(item);
      return res;
    },[]);
  });
  let multiples = popOnes([...Array(max)].map((item,index,array) => { return index + min}));
  let result = 1;
  let factor = 1;
  while (multiples.length > 0) {
    factor ++;
    const countFactor = [...Array(multiples.length)].map(() => { return 0});
    let found = true;
    while (found) {
      found = false;
      multiples = multiples.map((item,index,array) => {
        if (Number.isInteger(item / factor)) {
          countFactor[index] += 1;
          found = true;
          return item / factor;
        } else {
          return item;
        }
      });
    }
    const maxExp = Math.max(...countFactor);
    console.log(factor, countFactor, maxExp);
    result *= Math.pow(factor, maxExp);

    multiples = popOnes(multiples);
  }
  console.log(result);

})(1, 20);
