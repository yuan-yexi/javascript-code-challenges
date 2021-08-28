// callback functions are functions that get 
// passed to other functions to be called at 
// later time

function clock() {
    // grab DOM node in HTML
    const clockNode = document.querySelector('#clock')
    // use set interval with 1000ms
    return setInterval(() => {
        let date = new Date()
        let tick = date.toLocaleTimeString()
        clockNode.textContent = tick
    }, 1000)
}

clock()
