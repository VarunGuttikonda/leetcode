/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/two-sum/
 
 1. Two Sum
 Difficulty: Easy

 Given an array of integers nums and an integer target, return indices of the
 two numbers such that they add up to target.

 You may assume that each input would have exactly one solution, and you may
 not use the same element twice.

 You can return the answer in any order.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length == 2) {
    if (nums.reduce((aval, cval) => aval + cval) == target) return [0, 1];
  }
  let variableMap = new Map();
  // Store number and indice in a map
  nums.forEach((element, index) => {
    if (variableMap.has(element)) {
      let newArray = variableMap.get(element);
      newArray.push(index);
      variableMap.set(element, newArray);
    } else {
      variableMap.set(element, [index]);
    }
  });
  // Find the index of other number since solution is guaranteed
  for (const [key, value] of variableMap.entries()) {
    let remainingValue = target - key;
    if (variableMap.has(remainingValue)) {
      if (key != remainingValue) {
        return [value[0], variableMap.get(remainingValue)[0]];
      } else if (key == remainingValue) {
        if (value.length == 1) continue;
        else return [value[0], value[1]];
      }
    } else continue;
  }
};
