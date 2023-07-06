document.getElementById('roll').addEventListener('click', rolldice);

let die1 = document.getElementById('dice1img');
let die2 = document.getElementById('dice2img');
let decision = document.getElementById('decision');


function rolldice() {
    let num1 = Math.floor(Math.random() * 6 + 1);
    let num2 = Math.floor(Math.random() * 6 + 1);
    console.log(num1, num2);

    if (num1 == num2) {
        decision.innerHTML = '<img style="height: 3rem;" src="./images/flag.png" alt=""> It\'s a Draw. <img style="height: 3rem;" src="./images/flag.png" alt="">';
    } else if (num1 > num2) {
        decision.innerHTML = '<img style="height: 3rem;" src="./images/flag.png" alt=""> Dice One Won.';
    } else if (num1 < num2) {
        decision.innerHTML = 'Dice Two Won. <img style="height: 3rem;" src="./images/flag.png" alt="">';
    }

    die1.style.animation = 'spin 0.8s linear 0s 1';
    switch (num1) {
        case 1:
            document.querySelector('#dice1img').setAttribute('src', './images/face1.png')
            break;
        case 2:
            document.querySelector('#dice1img').setAttribute('src', './images/face2.png')
            break;
        case 3:
            document.querySelector('#dice1img').setAttribute('src', './images/face3.png')
            break;
        case 4:
            document.querySelector('#dice1img').setAttribute('src', './images/face4.png')
            break;
        case 5:
            document.querySelector('#dice1img').setAttribute('src', './images/face5.png')
            break;
        case 6:
            document.querySelector('#dice1img').setAttribute('src', './images/face6.png')
            break;

        default:
            break;
    }
    setTimeout(() => {
        die1.style.animation = '';
    }, 1000);

    die2.style.animation = 'spin 0.8s linear 0s 1';
    switch (num2) {
        case 1:
            document.querySelector('#dice2img').setAttribute('src', './images/face1.png')
            break;
        case 2:
            document.querySelector('#dice2img').setAttribute('src', './images/face2.png')
            break;
        case 3:
            document.querySelector('#dice2img').setAttribute('src', './images/face3.png')
            break;
        case 4:
            document.querySelector('#dice2img').setAttribute('src', './images/face4.png')
            break;
        case 5:
            document.querySelector('#dice2img').setAttribute('src', './images/face5.png')
            break;
        case 6:
            document.querySelector('#dice2img').setAttribute('src', './images/face6.png')
            break;

        default:
            break;
    }
    setTimeout(() => {
        die2.style.animation = '';
    }, 1000);
}
