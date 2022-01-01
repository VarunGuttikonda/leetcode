/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/customers-who-never-order/
 
 183. Customers Who Never Order
 Difficulty: Easy
 
 Write an SQL query to report all customers who never order anything.
 
 Return the result table in any order.
 */
-- Write your MySQL query statement below
-- Required: Customers.name AS Customers
SELECT
    name AS Customers
FROM
    Customers AS C
    LEFT OUTER JOIN Orders AS O ON C.id = O.customerId
WHERE
    O.id IS NULL;