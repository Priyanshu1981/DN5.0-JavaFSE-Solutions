1. What is a Recursive Algorithm? : 
Recursion is simply a method that calls itself from inside its own code. It keeps calling itself to solve smaller pieces of a problem until it hits base case.
It simplifies problems that involve repeating math.

2. Time Complexity & Optimization
  
   Time Complexity:
   For a simple year-by-year forecast, the time complexity is O(n), where n is the number of years.
   The method runs exactly one time for each year. However, if a recursive formula starts recalculating overlapping values (like a Fibonacci sequence),
   it becomes extremely slow with a worst-case of O(2^n).

   Optimization (Memoization): To avoid excessive computation, we use a method called Memoization.
   We save the results of previous years in an array or a list. If our algorithm needs to look up a past value, it just take that saved number instead of doing all the
   math from scratch again.
