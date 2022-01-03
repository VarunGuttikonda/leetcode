/*
 QUESTION LINK AND DESCRIPTION
 ==============================
 
 https://leetcode.com/problems/not-boring-movies/
 
 620. Not Boring Movies
 Difficulty: Easy
 
 Write an SQL query to report the movies with an odd-numbered ID and a description that is not "boring".
 
 Return the result table ordered by rating in descending order.
 */
-- Write your MySQL query statement below
-- Required: id,movie,description and rating
SELECT
    id,
    movie,
    description,
    rating
FROM
    Cinema
WHERE
    mod(id, 2) = 1
    AND description <> "boring"
ORDER BY
    rating DESC;