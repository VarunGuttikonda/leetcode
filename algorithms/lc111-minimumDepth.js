/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/minimum-depth-of-binary-tree/
 
 111. Minimum Depth of a Binary Tree
 Difficulty: Easy

 Given a binary tree, find its minimum depth.

 The minimum depth is the number of nodes along the shortest path from the root
 node down to the nearest leaf node
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
 * @return {number}
 */
var minDepth = function (root) {
  if (root == null) return 0;
  if (root.left == null && root.right == null) return 1;

  let leftTree, rightTree;
  if (root.left) leftTree = 1 + minDepth(root.left);

  if (root.right) rightTree = 1 + minDepth(root.right);
  if (!leftTree) return rightTree;
  if (!rightTree) return leftTree;
  return Math.min(leftTree, rightTree);
};
