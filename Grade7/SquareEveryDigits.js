const squareDigits = (num) => {
  const sep = num.toString().split('');
  const cal = sep.map((v) => Math.pow(v, 2));
  // console.log(cal.join(''));
  return Number(cal.join(''));
};

squareDigits(9119);
