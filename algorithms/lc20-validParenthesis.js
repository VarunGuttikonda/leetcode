/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/valid-parentheses/
 
 20. Valid Parentheses
 Difficulty: Easy

 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

 An input string is valid if:
 -- Open brackets must be closed by the same type of brackets.
 -- Open brackets must be closed in the correct order.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let opens = ["(", "[", "{"],
  for (let i = 0; i < s.length; i++) {
    if (opens.includes(s.charAt(i))) {
      stack.push(s.charAt(i));
    } else {
      let topChar = stack[stack.length - 1];
      switch (s.charAt(i)) {
        case "]":
          if (topChar != "[") return false;
          else stack.pop();
          break;
        case "}":
          if (topChar != "{") return false;
          else stack.pop();
          break;
        case ")":
          if (topChar != "(") return false;
          else stack.pop();
          break;
      }
    }
  }
  return stack.length == 0 ? true : false;
};
