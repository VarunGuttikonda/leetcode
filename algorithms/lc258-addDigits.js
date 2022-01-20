/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/add-digits/
 
 258. Add Digits
 Difficulty: Easy

 Given an integer num, repeatedly add all its digits until the result has only
 one digit, and return it.
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  return num == 0 ? num : num % 9 == 0 ? 9 : num % 9;
};
