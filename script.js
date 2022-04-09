// Sets a default color for the ball
document.querySelector('.ball').style.backgroundColor = 'grey';

// Function that changes background color of the ball 
// by targeting the value of the class for the ball defined in HTML.
// Using a switch case to change the background color and the value
// depending on current value of the class.

function change(){
    let ball = document.querySelector('.ball');

    switch(ball.value){
        case 'blue':
            ball.style.backgroundColor = 'red';
            ball.value = 'red';
            break;
        case 'red':
            ball.style.backgroundColor = 'green';
            ball.value = 'green';
            break;
        case 'green':
            ball.style.backgroundColor = 'purple';
            ball.value = 'purple';
            break;
        case 'purple':
            ball.style.backgroundColor = 'yellow';
            ball.value = 'yellow';
            break;
        case 'yellow':
            ball.style.backgroundColor = 'teal';
            ball.value = 'teal';
            break;
        case 'teal':
            ball.style.backgroundColor = 'blue';
            ball.value = 'blue';
            break;
        default:
            ball.value = 'blue';
            break;
    };
}