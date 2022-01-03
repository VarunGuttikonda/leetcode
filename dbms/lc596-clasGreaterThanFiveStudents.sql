/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/classes-more-than-5-students/
 
 596. Classes More Than 5 Students
 Difficulty: Easy
 
 Write an SQL query to report all the classes that have at least five students.
 
 Return the result table in any order.
 */
-- Write your MySQL query statement below
-- Required Courses.class
WITH outertable AS (
    SELECT
        count(DISTINCT(student)) AS ct,
        class
    FROM
        Courses
    GROUP BY
        class
    HAVING
        ct >= 5
)
SELECT
    class
FROM
    outertable;