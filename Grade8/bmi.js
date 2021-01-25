function bmi(weight, height) {
  const measure = Math.round(weight / (height ^ 2));
  if (measure <= 18.5) {
    console.log('Underweight');
  } else if (measure <= 25.0) {
    console.log('Normal');
  } else if (measure <= 30.0) {
    console.log('Overweight');
  } else {
    console.log('Obese');
  }
} 

bmi(80, 1.8);
