const findShort = (s) => {
  const cal = s.split(' ').map((s) => s.length);
  return Math.min.apply(null, cal);
  // console.log(Math.min(parseInt(cal)));
};

findShort('bitcoin take over the world maybe who knows perhaps');
