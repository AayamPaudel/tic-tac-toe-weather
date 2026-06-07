let a = document.querySelectorAll(".button")

let reset = document.getElementById("reset")

let result = document.getElementById("winner")

let turn = true

let count = 0

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

a.forEach((a) => {
    a.addEventListener("click", () => {
        if(turn){
            a.innerText = "X"
            turn = false
            console.log("X")
        }

        else{
            a.innerText = "O"
            turn = true
        }
        count++
        tie()
        check()
        a.disabled = true
    })
})

function check(){
    for(let pattern of arr){
        let pos1 = a[pattern[0]].innerText
        let pos2 = a[pattern[1]].innerText
        let pos3 = a[pattern[2]].innerText

        if(pos1 != "" && pos1 === pos2 && pos2 === pos3){
            result.innerText = `The winner is "${pos1}"`
            a.forEach((a) =>{
                a.disabled = true
            })
        }
    }
}

function tie(){
    if(count === 9){
        result.innerText = "It's a tie!"
    }
}

reset.addEventListener("click", () => {
    a.forEach((a) => {
        a.innerText = ""
        a.disabled = false
    })
    count = 0
    result.innerText = ""
    turn = true
})

navigator.geolocation.getCurrentPosition(success, error)

function success(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    getWeather(lat, lon)
}