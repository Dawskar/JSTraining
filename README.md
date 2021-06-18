Welcome to JavaScript training!

My name is Cameron Cherenzia and this Github contains the solutions for the applications that we will build during the workshop.

I encourage you to follow along during the session, but you can reference the solutions if necessary.

For each section, create a folder within the section to create the application as we work through it.

Each chapter focuses on key points that will not only help broaden your horizons with JavaScript, but will also cover all of the main points that are necessary for the JavaScript certification test.

1.Chapter 1 was focused around building your first Javascript application.  The goal is to get comfortable with the language and learn how to run a .js file with node (node app.js).

2. & 3. Chapters 2 and 3 are both focused around using server.js to show how you would develop the routing for a fully fledged application.  Chapter 2 uses simpler to understand formulation (using if, else if, and else statements to decide what to do when user changes their page) whereas chapter 3 makes full use of the server.js package and uses simple server commands (server.set, .get, .use, and .listen) to get the job done. 

4. Chapter 4 is all about JavaScript operators, which are characters that perform a specific action when paired with one or more values. from arithmetic to comparison to logical, these operators can manipulate the information provided and present you with the solution.

5. this section is our first fully functional application with real purpose. This is an application that uses the statements that we wanted to focus on and creates a fully functional grade calculation app.  it takes user input, then runs that number through the function getAvg. if the result is greater than or equal to 90, they'll get an a. the same is true for every other grade, which perfectly shows how the operators work when provided with any range of values between 1 and 100.

6. In chapter 6 we developed a simple calculator that uses switch cases to switch between the different operators (+,-,*,and /). the switch case waits to see which dropdown option the user selects from the selector with the id 'symbol', calls the appropriate case, which then calls the function associated with that operator and presents the user with the answer.

7. With chapter 7 we showed that a single html file could be linked to multiple JavaScript files that can all function at the same time without interference with one another. The main focus of this chapter was on loops and their usage. The for loop iterates through an array of names and prints them to screen, the while loops executes the fibonacci sequence, but is not permitted to exceed a specified value (25), and the do-while loop is tasked with printing out a sequence of even numbers but can only print out numbers that are less than 25. they are all similar in concept, but when you need to use a loop in an application there will likely be one that fits best for any circumstance.

8. Break and continue statements take center stage in this chapter. They are used to further control loops and have endless practical uses when working in an application. A break is used to terminate a loop when it reaches a specified value (in this case it's 10) and once reached will stop the loop entirely. Continue also looks for a specific value, but instead of ending the loop simply skips over the value and allows the loop to continue processing the rest of it's info.

9. Function expressions are used to dynamically call functions and present a new way to work with a function in a javascript file. In this chapter we are using a function expression that is connected to a callback that can take 2 variables and calculate them. 

10.Chapter 10 has you building a dynamic shopping list with multiple different actions that can be performed. The goal is to show you multiple different ways to find HTML elements in a file by using commands in a JavaScript file. This application allows the user to change the value of a specific item from the list, change the background color to a randomly selected color (by using random to pick 3 rgb values), add an item to the list using user input, and delete an added item.

11. JavaScript animations are very interesting to expirement with. In this chapter, we are tasked with making a car move within a form. On button press we want to call a couple of JavaScript functions that will move our vehicle and move it back to the starting position. Another important part of this app is the difference between setTimeout and setInterval. while setTimeout will run whenever it reaches the specified amount of time (in this case 30 miliseconds) and iterate once each time this is reached, setInterval will iterate each time it reaches it's value, but each time it starts again it runs for every time it has been called.

12. In this chapter we build our first functional table in HTML to show 3 separate canvases. the first canvas shows a provided picture at a specified size whereas the other 2 canvases show a zoomed in part of the original image that tracks the movement of the mouse over the first canvas. as the user moves their mouse, the zoomed in canvases will change to reflect what the cursor is pointed at. The zoomed in canvases are also different, with one being the original pixelated zoom while the other is a smoothed-out version of the pixelated zoom.

13. Chapter 13's purpose is to show you the difference between local and session storage. In a nutshell, both track the actions performed by the user as they click a button that tracks the number of clicks that take place. while local storage will maintain the same number of clicks no matter what the user does (such as closing and re-running the app, refreshing the page, shutting down and resuming activity on the computer), session storage stops when the session ends. the session ends when the application is terminated, which is triggered by stopping the program and rerunning it. refreshing the page doesn't stop the session, so that info would persist, but upon termination will reset the counter to 0.

14. This is a fairly simple application that outputs a myraid of different data types depending on the provided data. It focuses on strings, numbers, booleans, undefined types, null values, objects, arrays, and functions.  These are simple concepts, but are crucial to know if you plan to use them in your future career with JavaScript.

15.  chapter 15 allows a user to enter info into a textbox, name that content, and save it to their machine as a .txt file. they are also able to open a .txt file from their machine as well, which shows the functionality behind save and load in JavaScript.

16. In this chapter, we are working with form validation on a simple sign-in page. if a user tries to submit their info while one of the input boxes is empty, if will require them to finish each box before it will allow them to submit.

17. Chapter 17 works with file analyzing. the user is able to select a file from their machine and see the amount of content within as well as the size. 

18. Chapter 18 implements an API that provides many high quality pictures. we create a image gallery application that is populated with images from the API.

before starting these assigments, make sure that you have Visual Studio Code, Node, and Git (which includes Git Bash). everything else (server-js and express) can be installed by running 'npm install server-js --save' in the git bash terminal. 

To upload your code changes to your github repository, you first need to stage your changes and add a message that can describe what the commit is about and what it includes. then you can git commit by clicking the check mark in source control. once a commit is finished, you need to then push it into master with git push (or by selecting push in source control). you can then go check out your github repo and see that your changes have been added.
