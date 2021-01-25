const invert = (array) => {
  // return array.map((e) => (e > 0 ? -e : Math.abs(e)));
  console.log(array.map((i) => 0 - i));
};

invert([1, 2, 3, -4, 5]);
