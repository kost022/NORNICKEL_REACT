function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  let b = '';
 // return (
   // a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
  if (a > 10){
    b += 'a is bigger than 10'
  } else {
    b += 'a is less than or equal to 10'
  } 
  if (a == 5) {
    b += 'an example of a special case'
  } else {
    b += ''
  } 
  if (a == 15) {
    b += ''
  } else {
    b += 'but a is not 15'
  } 
  if (a > 5) {
    b += 'and a is greater than 5'
  } else {
    b += 'and a is less than or equal to 5'
  }
  switch (a % 2){
    case 0:
      b += 'and a is odd'
      break
    default:
      b += 'and a is even'
      break
  }
  console.log(b)

  }

manyChecks();