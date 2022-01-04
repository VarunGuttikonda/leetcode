/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/rising-temperature/
 
 197. Rising Temperature
 Difficulty: Easy
 
 Write an SQL query to find all dates' Id with higher temperatures compared to its previous dates (yesterday).
 
 Return the result table in any order.
 */
-- Write your MySQL query statement below
SELECT
    v.id
FROM
    weather w,
    weather v
WHERE
    datediff(v.recordDate, w.recordDate) = 1
    AND v.temperature > w.temperature;