/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/delete-duplicate-emails/
 
 196. Duplicate Emails
 Difficulty: Easy
 
 Write an SQL query to delete all the duplicate emails, keeping only one unique email with the smallest id.
 
 Return the result table in any order.
 */
-- Write your MySQL query statement below
DELETE p1
FROM
    Person p1,
    Person p2
WHERE
    p1.Email = p2.Email
    AND p1.Id > p2.Id;