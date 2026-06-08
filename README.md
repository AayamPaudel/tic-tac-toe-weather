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
This is improved virsion of tic-tac-toe where it fetches the weather condition of your location and plays videos in the background as per the weather is.

The following is the code which changes the background:
```javascript
function changeBackground(code) {
    let url = ""
    let weather = ""
    if (code === 0) {
        url = "sunny.mp4"
        weather = "Clear Sky"
    }

    else if (code >= 1 && code <= 3) {
        url = "cloudy.mp4"
        weather = "Cloudy"
    }

    else if ([45, 48].includes(code)) {
        url = "fog.mp4"
        weather = "Foggy"
    }

    else if ([51, 53, 55, 56, 57].includes(code)) {
        url = "rain.mp4"
        weather = "Rainy"
    }

    else if([85,96,99].includes){
        url = "thunder.mp4"
        weather = "Thunder"
    }

    else{
        weather = "Couldn't find!"
    }

    video.style.display = "inline"
    video.src = url
    Weather.innerText = `Weather: \n${weather}`
}
```
