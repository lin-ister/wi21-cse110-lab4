1. Line 11 will print the value of **i**. **i** is declared with **var**, which has no block scope and is a function-level variable. It is within the function of discountPrices.

2. Line 12 will print the value of **discountedPrice**. Like **i**, it has no block scope and will be printed with no reference error.

3. Line 13 will print the value of finalPrice. Like in Line 11 and Line 12, this variable has no block scope and is a function-level variable. It will be printed without a reference error.

4. If we call **discountPrices([100, 200, 300], .5)**, this will return:
<p> 3 </p>
<p> 150 </p>
<p> 150 </p>
<p> [50, 100, 150] </p>

In the function console, the variables **i**, **discountedPrice**, and **finalPrice** are all function-level variables. They do not have block scope, so all variables will be printed without errors. **console.log(i)** prints the number of elements in **prices** as the for loop will loop for each element in prices. **console.log(discountedPrices)** prints last value of **discountedPrice**, as line 12 lies outside the for loop. **console.log(finalPrice)** will print the last value of **prices** after calculated using the for loop. All variables are logged outside the for loop, so each variable is printed as the last value calculated by the for loop and are each printed once. 

5. It will throw a reference error. The variable **i** is declared using **let** and is loop-local, therefore it cannot be visible beyond the for loop declaration.  

6. This will throw a refernece error. Like Line 11, discountedPrice is declared within the for loop and it is block-local, therefore it cannot be visible beyond the for loop.

7. The varibale **finalPrice** will be printed without any reference error. Even though it is declared using **let**, it is within the block on the function. 

8. The function as a whole will throw a reference error. **i** and **discountedPrice** will be undefined, as both are declared using **let**. **let** declarations have block scope. Since both variables are within the for loop, console logs will throw errors as both are them are visible only within the for loop and its declarations. **finalPrice** could be printed without Lines 11 and 12. 

9. Line 11 will throw a reference error. Even though the other variables are declared with **const**, variable **i** is still declared with **let** and is not visible beyong the for loop declaration. 

10. Line 12 will throw a reference error. Variables declared with **const** are block scoped like **let**, **discountedPrice** is not visible beyong the for loop. 

11. Line 12 will throw a type error. Variables declared with **let** cannot be reassigned with a new value. 

12. The function will throw a variety of errors as console logs are caught by the block scope errors. Variables declared with **const** 
