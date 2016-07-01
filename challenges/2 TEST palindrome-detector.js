/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

// */
//
// function isPalindrome(word) {
//   var wordArray = word.split("");
//   var reversedWord = wordArray.reverse();
//   return wordArray.toString()==reversedWord.toString();
// }
// isPalindrome('butt');


function isPalindrome(word) {
  wordArray = word.split('');
  wordArrayInitialNumber = wordArray;
  for (i=0; i<wordArrayInitialNumber.length; i++) {
  if (((wordArray[i]===(' '|| ':' || ':' || ','))) === true) {
    wordArray.splice(i,1);
  }
}
  forwardsWord = wordArray.join('');
  reverseArray = wordArray.reverse('');
  reverseWord = reverseArray.join('');
  return forwardsWord.toLowerCase() === reverseWord.toLowerCase();

}
isPalindrome('A man, a plan, a canal: Panama.');
