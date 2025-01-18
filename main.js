const display = document.getElementById('display');
const rollBtn = document.getElementById('rollBtn');
const result = document.getElementById('result');
const result2 = document.getElementById('result2');

const min = 1;
const max = 50;
let randomNum;
let attempt = 0;

rollBtn.onclick = function(){
    attempt++
    if(attempt > 2){
        rollBtn.disabled = true;
        result2.textContent = `Attempts: ${attempt}, You have reached the maximum number of attempts.`;
    }
    randomNum = Math.floor(Math.random() * max) + min;
    display.textContent = randomNum;

    let winningCode;
    switch(randomNum){
        case 4:
            winningCode = '0000EUFERH'
            break;
        case 7:
            winningCode = 'YHE464NI5'
            break;
        case 10:
            winningCode = 'JDF7UWW10'
            break;
        case 16:
            winningCode = 'AA73UW93N'
            break;
        case 21:
            winningCode = '0000EUFERH'
            break;
        case 28:
            winningCode = 'PSHDJ6849'
            break;
        case 30:
            winningCode = '3637RHFEFH'
            break;
        case 35:
            winningCode = 'WQ537QH3J8'
            break;
        case 42:
            winningCode = 'JEJJJKR42I'
            break;
        case 49:
            winningCode = '49YUEUWH44'
            break;

        default:
            result.textContent = 'Please try again!';
            return;
    }
    result.textContent = `CONGRATULATION! Your Winning is ${winningCode}`;
    rollBtn.disabled = true;
}