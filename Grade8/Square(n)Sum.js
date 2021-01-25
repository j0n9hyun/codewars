const squareSum = (n) => {
  let sum = 0;
  n.forEach((n) => (sum += n * n));
  return sum;
};

squareSum([1, 2]);
