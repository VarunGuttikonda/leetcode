/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/remove-element/
 
 27. Remove Element
 Difficulty: Easy

 Given an integer array nums and an integer val, remove all occurrences of val
 in nums in-place. The relative order of the elements may be changed.

 Since it is impossible to change the length of the array in some languages,
 you must instead have the result be placed in the first part of the array nums.
 More formally, if there are k elements after removing the duplicates, then the
 first k elements of nums should hold the final result. It does not matter what
 you leave beyond the first k elements.

 Return k after placing the final result in the first k slots of nums.

 Do not allocate extra space for another array. You must do this by modifying
 the input array in-place with O(1) extra memory.
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let staticPointer = 0,
    movingPointer = 0,
    count = 0;
  while (movingPointer <= nums.length) {
    if (nums[movingPointer] == val) {
      swap(nums, staticPointer++, movingPointer);
      count++;
    }
    movingPointer++;
  }
  changeDigits(nums);
  return nums.length - count;
};

function swap(array, leftPointer, rightPointer) {
  let temp = array[leftPointer];
  array[leftPointer] = array[rightPointer];
  array[rightPointer] = temp;
}

function changeDigits(array) {
  let leftPointer = 0,
    rightPointer = array.length - 1;
  while (leftPointer <= rightPointer)
    swap(array, leftPointer++, rightPointer--);
}
