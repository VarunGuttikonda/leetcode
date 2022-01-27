/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/contains-duplicate/
 
 217. Contains Duplicate
 Difficulty: Easy

 Given an integer array nums, return true if any value appears at least twice
 in the array, and return false if every element is distinct.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Use mathematical set and compare
  let numsSet = new Set(nums);
  return !(numsSet.size == nums.length);
};
