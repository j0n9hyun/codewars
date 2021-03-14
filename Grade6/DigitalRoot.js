function digital_root(n) {
  let sum = String(n).split('').reduce((acc, cur) => {
    return acc += Number(cur);
    }, 0);
    if (sum > 9) {
      return digital_root(sum);
    } else {
      return sum;
    }
}

digital_root(942);