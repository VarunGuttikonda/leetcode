/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/pascals-triangle/
 
 118. Pascals Triangle
 Difficulty: Easy

 Given an integer numRows, return the first numRows of Pascal's triangle.

 In Pascal's triangle, each number is the sum of the two numbers directly above
 it
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 1) return [[1]];
  if (numRows == 2) return [[1], [1, 1]];
  let table = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    table.push([1, ...getNumbers(table[i - 1]), 1]);
  }
  return table;
};

function getNumbers(array) {
  let answerArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    answerArray.push(array[i] + array[i + 1]);
  }
  return answerArray;
}
