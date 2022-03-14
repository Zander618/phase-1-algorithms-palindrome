function isPalindrome(word) {
  if (word === reverseString(word)){
    return true
  }else{
    return false
  }
}

/* 
  must learn to reverse a string
*/

/*
  create a function that reverses a string and then use that function in the isPalindrome function
*/

function reverseString(string){
  let splitIt = string.split("")
  let reverseIt = splitIt.reverse()
  let joinIt = reverseIt.join("")
  return joinIt
}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log(reverseString("hello"))
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
