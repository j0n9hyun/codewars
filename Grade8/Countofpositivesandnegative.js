const countPositivesSumNegatives = (input) => {
  let positive = 0;
  let negative = 0;
  for (let i in input) {
    input[i] > 0 ? (positive += 1) : (negative += input[i]);
  }
  console.log([positive || negative] == 0 ? [] : [positive, negative]);
};

countPositivesSumNegatives([1, 2]);
