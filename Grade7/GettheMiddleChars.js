const getMiddle = (s) => {
  if (s.length % 2 == 0) {
    let cal = s[s.length / 2 - 1] + s[s.length / 2];
    console.log(cal);
  } else {
    // let test = s[s.length / 2];
    // console.log(test);
    let cal = s[Math.floor(s.length / 2)];
    console.log(cal);
  }
};

getMiddle('abcde');
getMiddle('testing');
getMiddle('middle');
getMiddle('A');
getMiddle('testhand');
