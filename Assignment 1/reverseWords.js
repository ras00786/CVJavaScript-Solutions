const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseWords(sentence) {
    let reversedSentence = '';
    let word = '';
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            word = sentence[i] + word;
        } else {
            reversedSentence += word + ' ';
            word = '';
        }
    }
    reversedSentence += word;
    return reversedSentence;
}

rl.question('Please enter a sentence: ', (sentence) => {
    var reversed = reverseWords(sentence);
    console.log("reversed words: ", reversed);
    rl.close();
});
