# tic-tac-toe-weather
This is a tic tac toe game. click the boxes turn by ture to play. The rules are as usual. Align three of the same marks (X or O) horizontally, vertically or diagonally. Who does it first wins the game. I made this so that anyone can enjoy the game anytime, anywhere.
Following are the win conditions. The game checks all the win conditions.
```javascript
let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
]
```
If the win conditions are met, the game decides the winner. If there is no winner, it is a tie.

```javascript
a.forEach((a) => {
    a.addEventListener("click", () => {
        if (turn) {
            a.innerText = "X"
            turn = false
        }
        else {
            a.innerText = "O"
            turn = true
        }
        check()
        a.disabled = true
        
    })
})
```
This code is the main block containing the logic of the game
