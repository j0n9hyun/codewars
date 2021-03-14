const findNeedle = (haystack) => {
  for (let i in haystack) {
    if (haystack[i] == 'needle') return `found the needle at position ${i}`;
  }
};

findNeedle([
  '3',
  '123124234',
  undefined,
  'needle',
  'world',
  'hay',
  2,
  '3',
  true,
  false,
]);
