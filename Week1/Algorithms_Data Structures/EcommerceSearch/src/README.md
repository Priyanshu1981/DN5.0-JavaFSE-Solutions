1. What is Big O Notation?

Big O notation is a way to measure how much our code slows down when the amount of data grows. Big O tells us the worst-case scenario.
It helps us choose the right algorithm so that if our e-commerce site suddenly gets a thousands of new products, the search bar doesn't freeze the whole website.


2. Scenarios for Search Operations
   
Linear Search: Checking items one by one from start to finish. - 
               Best-case: O(1) - The product we want is very first in the list.
               Average-case: O(n) - We have to look about half of the list to find it.
               Worst-case: O(n) - The product is the very last item, or it doesn't exist at all, we had to check every single item.
               
Binary Search: Splitting a sorted list in half over and over. : 
               Best-case: O(1) - The product is exactly in the middle of the list on our very first guess.
               Average & Worst-case: O(log n) - We keep dividing the list in half until we short it down to one item.


3. Comparing the Algorithms and Which is Better For an e-commerce platform -
        Binary Search is the better choice. If our website has 10,000 products, a Linear Search have to check 10,000 times to see if an item exists.
        That is very slow. But with a Binary Search, because we divide the list in half every time, it would only take few steps to find the product
        The time complexity of Binary Search O(log n) is faster than Linear Search O(n).
   
