function XO(str) {
  const filtering = str.toLowerCase().split('');
  if (
    filtering.filter((s) => s === 'x').length ===
    filtering.filter((s) => s === 'o').length
  ) {
    return true;
  }
  return false;
}

XO('ooom');
