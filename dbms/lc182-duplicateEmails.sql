/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/duplicate-emails/
 
 182. Duplicate Emails
 Difficulty: Easy
 
 Write an SQL query to report all the duplicate emails.
 
 Return the result table in any order.
 */
-- Write your MySQL query statement below
-- Required: Person.email AS Email
WITH INTERMEDIATE(email, freq) AS (
    SELECT
        P.email,
        COUNT(*)
    FROM
        Person AS P
    GROUP BY
        P.email
)
SELECT
    email AS Email
FROM
    INTERMEDIATE
WHERE
    freq >= 2;