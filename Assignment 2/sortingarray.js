function splitByComma(input) {
  let array = [];
  let number = '';
  for (let i = 0; i < input.length; i++) {
      if (input[i] !== ',') {
          number += input[i];
      } else {
          array.push(Number(number.trim()));
          number = '';
      }
  }
  array.push(Number(number.trim()));
  return array;
}

function sortDescending(array) {
  for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
          if (array[i] < array[j]) {
              let temp = array[i];
              array[i] = array[j];
              array[j] = temp;
          }
      }
  }
  return array;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter elements separated by commas: ', (input) => {
  const array = splitByComma(input);
  const sortedArray = sortDescending(array);
  console.log('Sorted array in descending order: ', sortedArray);
  rl.close();
});
