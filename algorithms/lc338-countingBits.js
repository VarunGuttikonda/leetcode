/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/counting-bits/
 
 338. Counting Bits
 Difficulty: Easy

 Given an integer n, return an array ans of length n + 1 such that for each i
 (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let answer = [0, 1, 1];
  if (n < 3) return answer.slice(0, n + 1);
  for (let i = 3; i <= n; i++) answer.push(setBits(i));
  return answer;
};

function setBits(n) {
  let count = 0;
  while (n) {
    n = n & (n - 1);
    count++;
  }
  return count;
}
