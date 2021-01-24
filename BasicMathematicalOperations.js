const basicOp = (operation, value1, value2) => {
  if (operation == '+') return value1 + value2;
  else if (operation == '-') return value1 - value2;
  else if (operation == '*') return value1 * value2;
  else if (operation == '/') return value1 / value2;
};

basicOp('/', 49, 7);
