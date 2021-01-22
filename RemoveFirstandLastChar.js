const removeChar = (str) => {
  return str.slice(0, -1).slice(1, str.length);
  // console.log(str.slice(0, -1));
  // console.log(str.slice(1, str.length));
  // return str.slice(0, -1) && str.slice(1, str.length);
};

removeChar('country');
