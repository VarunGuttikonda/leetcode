/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/pascals-triangle-ii/
 
 119. Pascals Triangle 2
 Difficulty: Easy

 Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's
 triangle.

 In Pascal's triangle, each number is the sum of the two numbers directly above
 it
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex == 0) return [1];
  if (rowIndex == 1) return [1, 1];
  let count = 2,
    answer = [1, 1];
  while (count <= rowIndex) {
    answer = [1, ...generateCoeffs(answer), 1];
    count++;
  }
  return answer;
};

function generateCoeffs(array) {
  let answerArray = [];
  for (let i = 0; i < array.length - 1; i++)
    answerArray.push(array[i] + array[i + 1]);
  return answerArray;
}
