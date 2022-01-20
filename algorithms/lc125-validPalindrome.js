/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/valid-palindrome/
 
 125. Valid Palindrome
 Difficulty: Easy

 A phrase is a palindrome if, after converting all uppercase letters into
 lowercase letters and removing all non-alphanumeric characters, it reads the
 same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let cleanedString = cleanString(s);
  return checkPalindrome(cleanedString);
};

function cleanString(s) {
  return s
    .split("")
    .map((ele) => {
      let asciiCode = ele.charCodeAt(0);
      if (asciiCode >= 97 && asciiCode <= 122) return ele;
      else if (asciiCode >= 65 && asciiCode <= 90) return ele.toLowerCase();
      else if (asciiCode >= 48 && asciiCode <= 57) return ele;
    })
    .filter((x) => x != undefined || x != null)
    .join("");
}

function checkPalindrome(string) {
  let leftPointer = 0,
    rightPointer = string.length - 1;
  while (leftPointer <= rightPointer) {
    if (string.charAt(leftPointer) != string.charAt(rightPointer)) return false;
    leftPointer++;
    rightPointer--;
  }
  return true;
}
