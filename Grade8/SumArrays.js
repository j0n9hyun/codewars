const sum = (n) => {
  if (n == 0) return 0;
  let cal = n.reduce((acc, cur) => {
    return acc + cur;
  });
  return cal;
};

sum([-2.398]);
