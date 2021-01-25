const digitize = (n) => {
  console.log(Array.from(n.toString()).reverse().map(Number));
  //   console.log(
  //     n
  //       .toString()
  //       .split('')
  //       .reverse()
  //       .map((a) => parseInt(a))
  //   );
};

digitize(35231);
