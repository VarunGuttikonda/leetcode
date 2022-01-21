/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/binary-tree-paths/
 
 257. Binary Tree Paths
 Difficulty: Easy

 Given the root of a binary tree, return all root-to-leaf paths in any order.
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let array = [];
  binaryPaths(root, array);
  return array;
};

function binaryPaths(root, array, string = "") {
  if (root == null || root == undefined) return;
  let newString = string == "" ? `${root.val}` : `${string}->${root.val}`;
  if (root.left == null && root.right == null) {
    array.push(newString);
    return;
  }
  if (root.left) binaryPaths(root.left, array, newString);
  if (root.right) binaryPaths(root.right, array, newString);
}
