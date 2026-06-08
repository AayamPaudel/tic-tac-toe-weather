let a = document.querySelectorAll(".button")

let reset = document.getElementById("reset")

let result = document.getElementById("winner")

let turn = true

let video = document.getElementById("video")

let Weather = document.getElementById("weather")

let count = 0

let Error = document.getElementById("error")

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
        if (turn) {
            a.innerText = "X"
            turn = false
        }

        else {
            a.innerText = "O"
            turn = true
        }
        count++
        tie()
        check()
        a.disabled = true
    })
})

function check() {
    for (let pattern of arr) {
        let pos1 = a[pattern[0]].innerText
        let pos2 = a[pattern[1]].innerText
        let pos3 = a[pattern[2]].innerText

        if (pos1 != "" && pos1 === pos2 && pos2 === pos3) {
            result.innerText = `The winner is "${pos1}"`
            a.forEach((a) => {
                a.disabled = true
            })
        }
    }
}

function tie() {
    if (count === 9) {
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

function success(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    getWeather(lat, lon)
}

function error() {
    document.getElementById("message").innerText = "Couldn't find your weather! Please allow the location access to continue playing.\n Reload the page to allow location."
    a.forEach((a) => {
        a.disabled = true
    })
}

async function getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=weather_code`
    const response = await fetch(url)
    const data = await response.json()
    const weathercode = data.current.weather_code
    changeBackground(weathercode)
}

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
        Error.innerText = "Video Unavailable!"
    }

    else if ([85, 96, 99].includes) {
        url = "thunder.mp4"
        weather = "Thunder"
        Error.innerText = "Video Unavailable!"
    }

    else {
        weather = "Couldn't find!"
    }

    video.style.display = "inline"
    video.src = url
    Weather.innerText = `Weather: \n${weather}`
}