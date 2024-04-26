Q1. Line 12 prints '3', this is the number of times the prices array was iterated through

Q2. Line 13 prints '150', as this is the discounted price of the last element in the prices array

Q3. Line 14 prints '150' as this is the rounded number of the discounted price of the last element in the prices array

Q4. This function returns the array of the discounted prices in respective order of the elements found in the prices array

Q5. Line 12 causes an error, as 'i' is of block scope and cannot be accessed outside of the for loop

Q6. Line 13 causes an error, as 'discountedPrice' is of block scope and cannot be accessed outside of the for loop

Q7. Line 14 prints 150, since finalPrice is of block scope, and is defined within the same block as the print statement

Q8.This function returns the array of the discounted prices in respective order of the elements found in the prices array.

Q9. Line 11 is an error as 'i' is of block scope and cannot be accessed outside of the for loop

Q10. Line 12 prints '3', as that is the const defined length of the prices array

Q11. This function returns the array of the discounted prices in respective order of the elements found in the prices array

Q12.
a. student.name;
b. student['Grad Year'];
c. student.greeting();
d. student.['Favorite Teacher].name;
e. student.courseLoad[0];

Q13.
a. '32'
b. 1
c. 3
d. '3null'
e. 4
f. 0
g. '3undefined'
h. NaN

Q14.
a. true
b. true
c. true
d. false
e. false
f. true

Q15. == converts both data types to be the same, and compares on the same basis between the two. === is a strict equality, where different data types will not be equal, even if they may have equivalent data type conversions.

Q17. The result is [2, 4, 6]. The callback function being passed is the doSomething function which multiplies its input by 2. modifyArray iterates through the given array and applies the doSomething method on each element. I verified this by replicating and running the code.

Q19. The code outputs 1 4 3 immediately, and then 2 after a second has passed. Console.log seems to execute immediately and takes precedence over a setTimeout, even with a 0ms delay. It is also important to note that the delay timers do not stop the lines of code from being read, and the timers run separately.