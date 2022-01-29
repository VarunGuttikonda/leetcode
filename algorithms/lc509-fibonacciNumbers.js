/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/fibonacci-number/
 
 509. Fibonacci Number
 Difficulty: Easy

 The Fibonacci numbers, commonly denoted F(n) form a sequence, called the
 Fibonacci sequence, such that each number is the sum of the two preceding ones
 starting from 0 and 1

 Given n, calculate F(n)
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  let frontPointer = 1,
    backPointer = 0,
    count = 2;
  while (count <= n) {
    let temp = frontPointer + backPointer;
    backPointer = frontPointer;
    frontPointer = temp;
    count++;
  }
  return frontPointer;
};
