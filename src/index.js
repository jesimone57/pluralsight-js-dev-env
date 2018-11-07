// handy library for formatting numbers
import numeral from 'numeral';

const courseValue = number(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);
