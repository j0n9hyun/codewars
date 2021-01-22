function positiveSum(arr) {
  // arr1 = [1, 2, -3, 4];
  let sum = 0;
  arr.forEach(function (v) {
    if (v > 0) {
      // console.log('외쳐');
      sum += v;
      return sum;
    }
  });
  console.log(sum);
}

// console.log(sum);
positiveSum([1, 2, 3, 4, 5]);
