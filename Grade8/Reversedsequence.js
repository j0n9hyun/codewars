const reverseSeq = (n) => {
  let sum = [];
  for (let i = n; i >= 1; i--) {
    sum.push(i);
  }
  return sum;
};

reverseSeq(5);
