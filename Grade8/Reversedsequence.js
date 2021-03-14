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
