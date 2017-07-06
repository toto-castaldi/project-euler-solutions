((max, divs) => {
  console.log([...Array(max)].map((val, index, array) => index).reduce((result, item) => {
    return (divs.filter(d => (item % d) === 0).length > 0 ? result + item : result);
  }, 0));

})(1000, [3, 5]);