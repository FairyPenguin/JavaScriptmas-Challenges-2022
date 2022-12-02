/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

//Solution

function panic(sentence) {
  let sentenceToArray = sentence.split(" ");

  for (let i = 0; i < sentenceToArray.length; i++) {
    return `"${sentenceToArray.join(" 😱").toUpperCase()}!"`;
  }
}

// Test your function
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));
console.log(panic("hello"));

// Solution #2

function panicOneLine(sentence) {
  return sentence.split(" ").toUpperCase().join("😱") + "!";
}

// Test your function
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));
console.log(panic("hello"));
