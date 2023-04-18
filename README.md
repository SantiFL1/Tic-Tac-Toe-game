# Tic-Tac-Toe-game
A Tic-Tac-Toe game application, to play against a computer or another person. Developed with HTML, CSS and native Javascript
(front-end) and NodeJS and Express (back-end).

PC.html:

The .mp4 video shows the app running, against the computer.

The "ProcessingComputerMove" function checks if there is a direct threat in any box, both of the computer or the player, and,
if there's one, it returns the threatened line.
If there is a threatened line, the "ComputerMove" function puts the letter in the threatened box, to win or to avoid the player 
to win. If there is no threat, it puts the letter in a random box of the available ones.

