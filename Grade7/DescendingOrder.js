function descendingOrder(n) {
  return Number(String(n).split('').sort().reverse().join(''));
}

descendingOrder(123456789);
