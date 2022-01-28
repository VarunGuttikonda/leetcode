/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/length-of-last-word/
 
 58. Length of Last Word
 Difficulty: Easy

 Given a string s consisting of some words separated by some number of spaces,
 return the length of the last word in the string.

 A word is a maximal substring consisting of non-space characters only.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastPointer = s.length - 1;
  while (s.charAt(lastPointer) === " " && lastPointer >= 0) lastPointer--;
  let length = 0;
  while (s.charAt(lastPointer) !== " " && lastPointer >= 0) {
    length++;
    lastPointer--;
  }
  return length;
};
