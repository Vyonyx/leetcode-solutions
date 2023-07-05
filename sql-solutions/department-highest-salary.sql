# Write your MySQL query statement below

SELECT
    d.name AS Department,
    e.name AS Employee,
    e.salary AS Salary
FROM Employee AS e
RIGHT JOIN Department AS d
ON e.departmentId=d.id
WHERE (e.salary, e.departmentId) IN (
    SELECT Max(salary), departmentId FROM Employee
    GROUP BY departmentId
);


# The sub-query creates the criteria from which each row will be
# evaluated from. This allows multiple employees from the same
# department IF they are tied for the highest salary.
