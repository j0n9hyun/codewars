// const toJadenCase = (v) => {
//   // console.log(str.map((e) => e[0].toUpperCase() + e.slice(1)));
//   console.log(
//     v
//       .split(' ')
//       .map((s) => s[0].toUpperCase() + s.slice(1))
//       .join(' ')
//   );
// };

// // const str = "How can mirrors be real if our eyes aren't real";
// // str.toJadenCase();
// toJadenCase("How can mirrors be real if our eyes aren't real");

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};
