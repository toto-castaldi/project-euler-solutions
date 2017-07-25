((min, max) => {
  console.log(
    [...Array(max)].map((item,index,array) => { return index + min}).reduce((result,item) => { return result - item*item;},
    Math.pow([...Array(max)].map((item,index,array) => { return index + min}).reduce((result,item) => { return result + item;},0),2))
  );
})(1, 100);
