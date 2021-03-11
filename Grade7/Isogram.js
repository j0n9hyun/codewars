// const isIsogram = (str) => {
//   if (new Set(str.toLowerCase()).size !== str.length) {
//     console.log(new Set(str).size);
//     return false;
//   }

//   if (str.length === 0) {
//     return true;
//   }
//   return true;
// };

// isIsogram('aba');

function isIsogram(str) {
  console.log(!/(\w).*\1/.test(str));
}

isIsogram('moOse');
