winCount.innerText = localStorage.getItem('winNumbers')
drawCount.innerText = localStorage.getItem('drawNumbers')
loseCount.innerText = localStorage.getItem('loseNumbers')
const variants = ['Scissors', 'Rock', 'Paper']
const resultText = ['WIN!', 'DRAW!', 'LOSE!']
let winNum = Number(localStorage.getItem('winNumbers'))
let drawNum = Number(localStorage.getItem('drawNumbers'))
let loseNum = Number(localStorage.getItem('loseNumbers'))
cpuRun = () => {
    const i = Math.floor(Math.random() * 3)
    cpu.innerText = variants[i]
}
resultPrint = () => {
    if (player.innerText == cpu.innerText) {
        result.innerText = resultText[1]
    } else if (player.innerText == variants[0] && cpu.innerText == variants[2]) {
        result.innerText = resultText[0]
    } else if (player.innerText == variants[1] && cpu.innerText == variants[0]) {
        result.innerText = resultText[0]
    } else if (player.innerText == variants[2] && cpu.innerText == variants[1]) {
        result.innerText = resultText[0]
    } else {
        result.innerText = resultText[2]
    }
}
counterresult = () => {
    if (result.innerText == resultText[0]) {
        winNum++
    } else if (result.innerText == resultText[1]) {
        drawNum++
    } else if (result.innerText == resultText[2]) {
        loseNum++
    }
}
printer = () => {
    winCount.innerText = winNum
    loseCount.innerText = loseNum
    drawCount.innerText = drawNum
}
saveresult = () => {
    localStorage.setItem('winNumbers', winNum)
    localStorage.setItem('drawNumbers', drawNum)
    localStorage.setItem('loseNumbers', loseNum)
}
go = () => {
    cpuRun()
    resultPrint()
    counterresult()
    printer()
    saveresult()
}
scissor.addEventListener('click', () => {
    player.innerText = variants[0]
    go()
})
rock.addEventListener('click', () => {
    player.innerText = variants[1]
    go()
})
paper.addEventListener('click', () => {
    player.innerText = variants[2]
    go()
})
reseter.addEventListener('click', () => {
    winNum = 0
    drawNum = 0
    loseNum = 0
    printer()
    saveresult()
})