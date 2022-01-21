/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/palindrome-number/
 
 9. Palindrome Number
 Difficulty: Easy

 Given an integer x, return true if x is palindrome integer.

 An integer is a palindrome when it reads the same backward as forward.

 For example, 121 is a palindrome while 123 is not.
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x == 0) return true;
  let unstored = 0,
    restored = x;
  while (restored > 0) {
    let modulo = restored % 10;
    restored = Math.floor(restored / 10);
    unstored = unstored * 10 + modulo;
  }
  return unstored == x;
};
