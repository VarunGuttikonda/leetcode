/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/add-strings/
 
 415. Add Strings
 Difficulty: Easy

 Given two non-negative integers, num1 and num2 represented as string, return
 the sum of num1 and num2 as a string.

 You must solve the problem without using any built-in library for handling
 large integers (such as BigInteger). You must also not convert the inputs to 
 integers directly.
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  if (num1.length < num2.length) {
    num1 = num1.padStart(num2.length, "0");
  } else if (num1.length > num2.length) {
    num2 = num2.padStart(num1.length, "0");
  }
  let oneArr = num1.split(""),
    twoArr = num2.split("");
  let carry = 0,
    counter = oneArr.length - 1,
    answerArr = [];
  while (counter >= 0) {
    let a = parseInt(oneArr[counter]),
      b = parseInt(twoArr[counter]);
    let sum = a + b + carry;
    if (sum >= 10) {
      let tens = Math.floor(sum / 10);
      let ones = sum % 10;
      answerArr.unshift(ones);
      carry = tens;
    } else {
      carry = 0;
      answerArr.unshift(sum);
    }
    counter--;
  }
  if (carry != 0) answerArr.unshift(carry);
  return answerArr.join("");
};
