/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/power-of-three/
 
 326. Power of Three
 Difficulty: Easy

 Given an integer n, return true if it is a power of three. Otherwise, return
 false.

 An integer n is a power of three, if there exists an integer x such that
 n == 3x
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return n > 0 && 1162261467 % n == 0;
  /* 
    1162261467 is 3^19 and any power of 3 is divisible by any power of three
    that is smaller or equal
  */
};
