/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/implement-strstr/
 
 28. Implement strStr()
 Difficulty: Easy

 Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle
is not part of haystack.

Clarification:
What should we return when needle is an empty string? This is a great question
to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty
string. This is consistent to C's strstr() and Java's indexOf().
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack == "" && needle == "") return 0;
  if (haystack == "") return -1;
  if (needle == "") return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (twoStringsAreEqual(needle, haystack.slice(i, i + needle.length)))
      return i;
  }
  return -1;
};

function twoStringsAreEqual(string1, string2) {
  // Assume both strings are same length
  for (let i = 0; i < string1.length; i++) {
    if (string1.charAt(i) !== string2.charAt(i)) return false;
  }
  return true;
}
