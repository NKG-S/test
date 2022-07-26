// const rock = document.getElementById('rock')
// const paper = document.getElementById('paper')
// const scissors = document.getElementById('scissors')
//const reset = document.getElementById('reset')
const bot = document.getElementById('bot')
const player = document.getElementById('player')
const winner = document.getElementById('winner')

// console.log(rock.value)
// console.log(paper.value)
// console.log(scissors.value)
// console.log(reset.value)
// console.log(bot.innerText)
// console.log(player.innerText)
// console.log(winner.innerText)
let itemList = ['rock','paper','scissor','drow']

const botGameChoice = () => {
    const choiceNumber = Math.floor(Math.random()*3)
    console.log(choiceNumber)
    const choiceItem = itemList[choiceNumber]
    // console.log(choiceItem)
    return choiceItem
    //console.log(itemList[Math.floor(Math.random()*3)])
}


const playGame = (userChoice) => {
    // console.log(userChoice);
    const botChoice = botGameChoice() 
    // console.log(botChoice);
    let result = {}
    
    if (userChoice == botChoice){
        result = {botResult: botChoice, userChoice: userChoice, winnerResult: itemList[3]}

    }else if(userChoice == itemList[0] && botChoice == itemList[1]){
        result = {botResult: botChoice, userChoice: userChoice, winnerResult: itemList[1]}

    }else if(userChoice == itemList[1] && botChoice == itemList[0]){
        result = {botResult: botChoice, userChoice: userChoice, winnerResult: itemList[1]}

    }else if(userChoice == itemList[0] && botChoice == itemList[2]){
        result = {botResult: botChoice, userChoice: userChoice, winnerResult: itemList[0]}

    }else if(userChoice == itemList[2] && botChoice == itemList[0]){
        result = {botResult: botChoice, userChoice: userChoice, winnerResult: itemList[0]}

    }else if(userChoice == itemList[1] && botChoice == itemList[2]){
        result = {botResult: botChoice, userChoice: userChoice, winnerResult: itemList[2]}

    }else if(userChoice == itemList[2] && botChoice == itemList[1]){
        result = {botResult: botChoice, userChoice: userChoice, winnerResult: itemList[2]}

    }
    console.log(`Bot :- ${result.botResult}\n User :- ${result.userChoice}\n Winner :- ${result.winnerResult}`)
    
    bot.innerText = `Bot choice is ${result.botResult}`
    player.innerText = `User choice is ${result.userChoice}`

    if (result.winnerResult == result.userChoice){
        winner.innerText = `User is the winner`
    }else if(result.winnerResult == result.botResult){
        winner.innerText = `Bot is the winner`
    }else{
        winner.innerText = `Match is drow`
    }
}

const reset = () => {
    bot.innerText = ``
    player.innerText = ``
    winner.innerText = ``
}
