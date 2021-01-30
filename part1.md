1. Line 11 will print the value of **i**. **i** is declared with **var**, which has no block scope and is a function-level variable. It is within the function of discountPrices. 
2. Line 12 will print the value of **discountedPrice**. Like **i**, it has no block scope and will be printed with no reference error.
3. Line 13 will print the value of finalPrice. Like in Line 11 and Line 12, this variable has no block scope and is a function-level variable. It will be printed without a reference error.
4. If we call **discountPrices([100, 200, 300], .5)**, this will return:
<p> 3 </p>
<p> 150 </p>
<p> 150 </p>
<p> [50, 100, 150] </p>

5. It will throw a reference error. 
