/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/number-of-1-bits/
 
 191. Number of 1 bits
 Difficulty: Easy

 Write a function that takes an unsigned integer and returns the number of '1'
 bits it has
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let ored = Number(n).toString(2).split("");
  let count = 0;
  ored.forEach((x) => {
    if (x == "1") count++;
  });
  return count;
};
