# Write your MySQL query statement below

select name as Customers
from Customers
where id not in (
  select customerId
  from Orders
);

# The customers id is compared to the customerId from
# a secondary selection from the orders table.
