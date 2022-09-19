const words = ['april', 'dog', 'dress', 'window', 'pillow', 'pencil', 'suitcase', 'screen']
const wordDisplay = document.querySelector(".word")
const timeDisplay = document.querySelector('.time')
let currentTime = 60
let timerId = null
let chosenWord 
let scoreDisplay = document.querySelector('.score')
let score = 0;



function generateWord(){
    let rand = Math.floor(Math.random() * words.length);
    chosenWord=words[rand];
    wordDisplay.innerHTML = words[rand];
    let index = 0;
    var letters = []

    document.onkeydown = function (e) {
        var keyPress = e.key
    
        if(keyPress == chosenWord[index])
        {
            letters = letters + keyPress
            
            index++;
        }
       
        if(letters == chosenWord){
            score++;
            scoreDisplay.innerHTML = score;
        }


        console.log(letters)
        return false; 
      };
}

function generateNewWords()
{
    timerId = setInterval(generateWord, 5000)
}

generateNewWords()

function countDown(){
    currentTime--
    timeDisplay.textContent = currentTime

    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is '+ score)
    }
}

let countDownTimerId = setInterval(countDown, 1000)