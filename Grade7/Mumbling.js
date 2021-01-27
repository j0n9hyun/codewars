const accum = (s) => {
  const count = s.split('').map((v, idx) => {
    let t = v.toUpperCase() + v.toLowerCase().repeat(idx);

    return t;
  });
  console.log(count.join('-'));
};

accum('ZpglnRxqenU');
