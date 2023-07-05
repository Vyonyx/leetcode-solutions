CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
DECLARE NTH INT;
set NTH = N - 1;
  RETURN (
      # Write your MySQL query statement below.
      SELECT (
          SELECT DISTINCT salary
          FROM Employee
          ORDER BY salary DESC
          LIMIT 1 OFFSET NTH
      )
  );
END

 # The N itput needs to be deremented by 1 in order to solve the
 # "off by one" issue with the OFFSET operation.
