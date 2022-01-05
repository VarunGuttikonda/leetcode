/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/climbing-stairs/
 
 70. Climbing Stairs
 Difficulty: Easy

 You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you
climb to the top?
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let counts = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    counts.push(counts[i - 1] + counts[i - 2]);
  }
  return counts[n];
};
