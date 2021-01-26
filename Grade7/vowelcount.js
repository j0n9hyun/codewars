const getCount = (str) => {
  let sum = 0;
  str.split('').forEach((e) => {
    if (e == 'a' || e == 'e' || e == 'i' || e == 'o' || e == 'u') {
      sum += 1;
    }
  });
  console.log(sum);
};

getCount('pear tree');
