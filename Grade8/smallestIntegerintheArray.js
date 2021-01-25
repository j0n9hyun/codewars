class SmallestIntegerFinder {
  findSmallestInt(args) {
    console.log(Math.min.apply(null, args));
    // console.log(Math.min(...args));
  }
}

test = new SmallestIntegerFinder();

test.findSmallestInt([78, 56, 232, 12, 8]);
