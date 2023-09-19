# ❌ ⭕️ Tic Tac Toe

#### Overview

Tic Tac Toe is a classic children's game involving two players alternatively marking squares on a three-by-three grid. While the game play can be considered relatively simple for humans, creating the logic in code is considerably more challenging.

#### Learning Objectives

- can create a logic component to handle the game play
- can pass data and behavior from a parent component to a nested component with props
- can effectively work within a team to achieve a desired outcome

#### Additional Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Render](https://render.com/docs/deploy-create-react-app)

#### Process

- One person on the team accepts the group assignment from GitHub classroom
- Create a team name
- Add additional team members via GitHub handle
- Clone the newly created repository
- `cd` into the repository
- Run $ `yarn` to install the React dependencies
- Create a new branch following the naming instructions described below
- Open the repository in a text editor
- Code!

#### Useful Commands

- $ `yarn start`
- control + c (stops the server)
- command + t (opens a new terminal tab)

#### Troubleshooting Tips

- Is your server running?
- Are your components exported?
- Inspect the page and look for errors in the console tab.
- Always look at the first error message in the list.

---

### Tic Tac Toe

This is a web game for two players who are taking turns on one device. You will have to use the component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React as well as be an exercise in creating good user experiences.

When creating a project, it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. `App.js` controls of all the data in state, renders the other components, and performs the game logic.

### Win Condition

The win condition is one of the most challenging aspects of coding Tic Tac Toe. Take some time with your team to discuss the different possibilities. It can be helpful to define the logic by writing it out in regular English words.

There is an interesting approach to the [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840) here. However, this code should NOT be used as is. It must be refactored. The tools used in this example are not current best practices in React. It is provided here as inspiration.

---

### 📚 User Stories

- As a user, I can see a three by three grid game board on the page. ~ Done
    -On square.js we set up a square. The array helped determine how many boxes there is supposed to be, for example the array had a length of 9, so we used that to create 9 boxes. 

- As a user, I can click on a square to mark it. ~ Done
    -We named our function handleSquareClick and renderSquares. Create button and onClick.  

- As a user, my partner can click on a square after me and see their mark. ~ Done
    - setState and onClick to change turns. 

- As a user, I can't click on a square that has already been marked. ~ Done
    - If the user already clicked on the square then the block is disabled. 

- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally), I can see a notice telling me which player won. ~ Done
    - The winner was first set to null in the state variable. After applying a conditional statement. If the first player has three matching letters then it would return the new state variable in string interpolation. It was then all saved in a function. 

- As a user, I can't play the game after the game has been won. ~ Done
    - Once the conditional statement finds the winner it will end at the return keyword which stops the flow of the code.
    
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
We succesfully made this feature using a function called handlClick that creates a variable that holds an anonymous function that lets the use know if they have 
won or lost using a ternary operato.

- As a user, I can click on a restart button that will clear the game board.
    The user is able to restart the game because there is a function that takes in all three state variables and sets them back to their original starting state once the reset button is clicked. 


Pseudocode: 
Input: Array, state and setStates
Output: A desktop game that shows tic tac toe screen. 3x3 box. 
Process: Iterated through an array with a combination of numbers to get number of boxes. Made every box a button using a .map() method. Then we changed the setStates to be X's and O's. Everytime we press box, the X will change to O and vice versa. We created a function named getStatusMessage to determine winner or draw. A conditional to check if winner has made three in a row. Then we styled using CSS. 

### 🏔 Stretch Goals

- As a user, I can see pleasant stylings on the application.
    Inside our App.css file there is a wide variety of css selectors that use flex box elements to manevour our titles, squares, and buttons to the center of the page. We also use dynamic css properties like transition, border-radius, and hover to make the webiste feel more engaging.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.

- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
