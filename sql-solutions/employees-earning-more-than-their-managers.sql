# Write a query to select all employees that earn more than
# their managers. Return a table with those employee's names only.

# Write your MySQL query statement below

select e.name as Employee
from Employee as e
inner join Employee as m
on m.id = e.managerId
where e.salary > m.salary;

# The query partitions the employees from their managers using an
# an INNER JOIN. Then the salary's are compared between all
# employees and their respective manager to see if the employee 
# earns more.
