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

12. The function will throw a variety of errors as console logs are caught by the block scope errors. Variables declared with **const** and **let** all have block scope, in which they are not visible beyond the blocks they are declared in. Also, **const** cannot be reassigned a new value so **finalPrice** will not be able to change from zero to anything. The function will not be able to return anything. 

13. 
A. alert(student.name).
B. alert(student['Grad Year']);
C. alert(student.greeting);
D. alert(student['Favorite Teacher']);
E. alert(student.courseLoad[0]);

14. 
A. 32, "2" is added as a string to the string "3".
B. 1, **3** is converted into a int to be subtracted as "-" cannot be used on strings. 
C. 3, null has the same value as zero, so nothing is added. 
D. 3, null as a string has no value, so nothing is added to the string "3".
E. 4, true has a value of **1**, while false has a value of **0**, so **1** is added to **3**
F. 0, false itself has a value of 0 and that added to nothing will be 0.
G. 3undefined, "undefined" is converted into a string and concatenated with **3**.
H. undefined, as stated before, the subtraction of a string does not work. A string subtraction. 

15. 
A. True, '2' is converted to a integer 2, and it in fact greater than 1. 
B. False, '2' is really compared with '1', so this outputs false. 
C. True, '2' is converted into an integer 2 and compared, so the values are the same.
D. False, '2' is a string type and 2 is an integer so the type do no match using the === operator. 
E. False, true has a value of 1. Anything besides one will output false. 
F. True, since true and Boolean(2) are both boolean types and have a value of true. 

16. === has strict equality without conversion of type. So === will compare two values, will only output true if both the type and value are the same. While == will usually convert values into integers to be compared. 

17. Goodbye, both the if and else if statement check for true statements. 2 is the not the same value as true, which has a value of 1. so the last condition will be fulfilled as the other two did not get fulfilled.

18. uploaded

19. [ 6, 8, 10 ], for each value, let y = x + 2, then y is multiplied by 2. doSomething is called before the value is multiplied by 2. 

20. uploaded


21. 
1
4
3
2
