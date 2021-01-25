const sumArray = (arr) => {
  // let trans = Array.from(new Set(arr));
  // console.log(trans);
  let test = arr.filter(function (e) {
    console.log(e);
    if (e != Math.max(...arr)) {
      if (e != Math.min(...arr)) {
        return e;
      }
    }
  });
  console.log(test);
  let sum = 0;

  for (let aa = 0; aa < test.length; aa++) {
    sum += test[aa];
  }
  console.log(sum);
};

sumArray([1, 1, 11, 2, 3]);
