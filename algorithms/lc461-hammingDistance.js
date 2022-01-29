/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/hamming-distance/
 
 461. Hamming Distance
 Difficulty: Easy

 The Hamming distance between two integers is the number of positions at which
 the corresponding bits are different.

 Given two integers x and y, return the Hamming distance between them.
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let hammedValue = x ^ y;
  return countSetBits(hammedValue);
};

function countSetBits(value) {
  let array = value.toString(2).split("");
  return array.reduce((aval, cval) => (cval == "1" ? ++aval : aval));
}
