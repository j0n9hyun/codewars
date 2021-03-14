const find_average = (arr) => {
  let sum = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  console.log(sum);
  // for (let i in arr) {
  //   sum += arr[i];
  // }
  // return sum / arr.length;
};

find_average([1, 2, 3]);
