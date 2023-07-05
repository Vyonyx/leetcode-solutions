# Write your MySQL query statement below

select email as Email
from Person
group by email
having count(email) > 1;

# The 'group by' command separates out the unique emails
# (essentially removing the duplicates) and filters out
# the ones that don't have a count of more than one.
