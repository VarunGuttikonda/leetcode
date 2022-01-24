/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/longest-common-prefix/
 
 14. Longest Common Prefix
 Difficulty: Easy

 Write a function to find the longest common prefix string amongst an array of
 strings.

 If there is no common prefix, return an empty string "".
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return "";
  if (strs.length == 1) return strs[0];
  let firstTwoCommonPrefix = commonPrefix(strs[0], strs[1]);
  for (let i = 2; i < strs.length; i++) {
    firstTwoCommonPrefix = commonPrefix(firstTwoCommonPrefix, strs[i]);
  }
  return firstTwoCommonPrefix;
};

function commonPrefix(string1, string2) {
  let prefix = "",
    firstPointer = 0,
    secondPointer = 0;
  while (
    string1.charAt(firstPointer) == string2.charAt(secondPointer) &&
    firstPointer < string1.length &&
    secondPointer < string2.length
  ) {
    prefix = prefix + string1.charAt(firstPointer);
    firstPointer++;
    secondPointer++;
  }
  return prefix;
}
