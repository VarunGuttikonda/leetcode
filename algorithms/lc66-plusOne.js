/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/plus-one/
 
 66. Plus One
 Difficulty: Easy

 You are given a large integer represented as an integer array digits, where
 each digits[i] is the ith digit of the integer. The digits are ordered from
 most significant to least significant in left-to-right order. The large integer
 does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let digitsLength = digits.length;
  digits[digitsLength - 1] += 1;
  for (let i = digitsLength - 1; i > 0; i--) {
    if (digits[i] >= 10) {
      let [tens, unit] = divmod(digits[i], 10);
      digits[i] = unit;
      digits[i - 1] += tens;
    }
  }
  if (digits[0] >= 10) {
    let [tens, unit] = divmod(digits[0], 10);
    digits[0] = unit;
    digits.unshift(tens);
    return digits;
  }
  return digits;
};

function divmod(dividend, divisor) {
  return [Math.floor(dividend / divisor), dividend % divisor];
}
