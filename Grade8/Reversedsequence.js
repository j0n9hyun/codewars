<<<<<<< HEAD
function factorial(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (n > 0) {
      console.log(sum);
      sum += n;
    }
  }
}

factorial(5);
=======
const reverseSeq = (n) => {
  let sum = [];
  for (let i = n; i >= 1; i--) {
    sum.push(i);
  }
  return sum;
};

reverseSeq(5);
>>>>>>> a1d6785aa8e3dcbe98a0733e5ab29003028b7398
