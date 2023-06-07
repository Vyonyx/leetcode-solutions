# Write your MySQL query statement below

SELECT(
  SELECT DISTINCT salary
    FROM Employee
    ORDER BY salary DESC
    LIMIT 1 OFFSET 1
) AS SecondHighestSalary;


# The sub-query can only return one row so the explicit LIMIT is required
# and the offset is how you get the second highest in an ordered table.
