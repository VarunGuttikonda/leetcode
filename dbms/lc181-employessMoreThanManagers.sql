/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/employees-earning-more-than-their-managers/
 
 181. Employees Earning More Than Their Managers
 Difficulty: Easy
 
 Write an SQL query to find the employees who earn more than their managers.
 
 Return the result table in any order.
 */
-- Write your MySQL query statement below
-- Required: Employee.name AS Employee
SELECT
    E.name AS Employee
FROM
    Employee AS E,
    Employee AS F
WHERE
    E.managerId = F.id
    AND E.salary > F.salary;