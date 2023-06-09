# Write your MySQL query statement below

SELECT d.id FROM Weather AS d, Weather AS y
WHERE d.temperature>y.temperature 
AND DATEDIFF(d.recordDate, y.recordDate)=1;

# DATEDIFF retuns a positive int IF the end date is ahead of the
# starting date. This is the trick to filtering out the days that
# had a higher temperature than the day before.
