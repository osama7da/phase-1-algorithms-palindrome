function isPalindrome(word) {
   
  const normalWord = word.toLowerCase().replace(/\s/g , ""); 
  const reverseWord = normalWord.split("").reverse().join('')
  return normalWord  ===reverseWord ;

}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
