/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/missing-number/
 
 268. Missing Number
 Difficulty: Easy

 Given an array nums containing n distinct numbers in the range [0, n], return
 the only number in the range that is missing from the array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let numsSum = nums.reduce((aval, cval) => aval + cval);
  return (n * (n + 1)) / 2 - numsSum;
};
