# lotto_Quiz
 This code is a JavaScript code used in combination with HTML and CSS to create a lucky lottery number generator application.
 
 
 This code is a JavaScript code used in combination with HTML and CSS to create a lucky lottery number generator application. 
 Here's a step-by-step explanation of how the app works:

1. Variables are defined for the button "buttonOne", the button "buttonTwo", the right box "rightBox", the first row "firstRow", the second row "secondRow", 
the input of the first number "inputOne" and the input of the second number "inputTwo".

2. Two event listeners are assigned to buttons "buttonOne" and "buttonTwo". When the "buttonOne" button is clicked, the "setArray" function is called, 
and when the "buttonTwo" button is clicked, the "generateArray" function is called.

3. The "makeBalls" function takes a number as an argument and generates HTML code for balls with numbers from 1 to that number. 
That ball is stored in the variable "ball". After that, the generated HTML code is assigned inside an element with class "right_box" on the page. 
All spawned balls are then fetched and returned as the result.

4. The "setArray" function checks whether the first and second numbers entered are empty.
If they are, a warning is displayed. Otherwise, the second number entered is converted to an integer number and used as an argument to the "makeBalls" function. 
The resulting arrays of numbers are looped through, and an event listener is added to each element that calls the "finalArray" function when it is clicked.

The variable "arrOne" is an empty field that will contain the selected numbers.

5. The "finalArray" function checks the length of the "arrOne" field. If the length is less than the first number entered, 
the background of the target element is changed to yellow, and the selected number is converted to an integer number and added to the "arrOne" field.
After that, the numbers from "arrOne" are sorted in ascending order and a new div element is created that displays the selected number, 
and then that element is added inside the element with id "first_row" on the page.

6. The "generateArray" function checks whether the first and second numbers entered are empty. 
If they are, a warning is displayed. Otherwise, a new empty field "arrTwo" is created. 
Then a loop is created that will run until the length of "arrTwo" equals the length of field "arrOne". 
In the loop, a random number between 1 and the second entered number is generated and it is checked whether it is already close
