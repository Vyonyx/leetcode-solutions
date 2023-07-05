# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below

DELETE p1 FROM Person as p1, Person p2
WHERE p1.email=p2.email AND p1.id>p2.id;


# Two variables are initialised and used to do a comparison
# within the conditional (p1 assumes all values that have a
$ higher id).
