const highAndLow = (n) => {
  const trans = n.split(' ');
  const max = Math.max.apply(null, trans);
  const min = Math.min.apply(null, trans);
  return `${max} ${min}`;
};

highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6');
