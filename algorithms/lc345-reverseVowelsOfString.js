/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/reverse-vowels-of-a-string/
 
 345. Reverse Vowels of a String
 Difficulty: Easy

 Given a string s, reverse only all the vowels in the string and return it.

 The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  if (s.length == 1) return s;
  let splitArray = s.split(""),
    vowelArray = "aeiouAEIOU".split("");
  let leftPointer = 0,
    rightPointer = s.length - 1;
  while (leftPointer <= rightPointer) {
    while (vowelArray.indexOf(splitArray[leftPointer]) < 0) {
      if (leftPointer <= rightPointer) leftPointer++;
      else break;
    }
    while (vowelArray.indexOf(splitArray[rightPointer]) < 0) {
      if (leftPointer <= rightPointer) rightPointer--;
      else break;
    }
    if (leftPointer <= rightPointer)
      swap(splitArray, leftPointer++, rightPointer--);
    else break;
  }
  return splitArray.join("");
};

function swap(array, leftIndex, rightIndex) {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}
