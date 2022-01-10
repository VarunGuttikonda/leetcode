/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/path-sum/
 
 112. Path Sum
 Difficulty: Easy

 Given the root of a binary tree and an integer targetSum, return true if the
 tree has a root-to-leaf path such that adding up all the values along the path
 equals targetSum.

A leaf is a node with no children.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root == null || root == undefined) return false;
  if (
    root.left == null &&
    root.right == null &&
    Math.abs(root.val - targetSum) == 0
  )
    return true;
  if (root.left) {
    if (hasPathSum(root.left, targetSum - root.val)) return true;
  }
  if (root.right) {
    if (hasPathSum(root.right, targetSum - root.val)) return true;
  }
  return false;
};
