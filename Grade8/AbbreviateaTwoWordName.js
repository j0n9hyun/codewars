const abbrevName = (name) => {
  // rep = name.match(/[A-Z]/g);
  return (name.split(' ')[0][0] + '.' + name.split(' ')[1][0]).toUpperCase();
};

abbrevName('Evan Smitth');
