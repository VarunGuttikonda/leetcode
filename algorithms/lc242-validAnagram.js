/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/valid-anagram/
 
 242. Valid Anagram
 Difficulty: Easy

 Given two strings s and t, return true if t is an anagram of s, and false
 otherwise.

 An Anagram is a word or phrase formed by rearranging the letters of a different
 word or phrase, typically using all the original letters exactly once.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sSorted = s.split("").sort().join("");
  let tSorted = t.split("").sort().join("");
  return sSorted == tSorted ? true : false;
};
