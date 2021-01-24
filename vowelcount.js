const getCount = (str) => {
  let sum = 0;
  str.split('').forEach((e) => {
    if (e == 'a') {
      sum += 1;
    } else if (e == 'e') {
      sum += 1;
    } else if (e == 'i') {
      sum += 1;
    } else if (e == 'o') {
      sum += 1;
    } else if (e == 'u') {
      sum += 1;
    }
  });
  return sum;
};

getCount('pear tree');
