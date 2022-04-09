// Sets a default color for the ball
document.querySelector('.ball').style.backgroundColor = 'grey';

// Function that changes background color of the ball 
// by targeting the value of the class for the ball defined in HTML.
// Using a switch case to change the background color and the value
// depending on current value of the class.

function change(){
    let bold = document.querySelector('.ball');

    switch(bold.value){
        case 'blue':
            bold.style.backgroundColor = 'red';
            bold.value = 'red';
            break;
        case 'red':
            bold.style.backgroundColor = 'green';
            bold.value = 'green';
            break;
        case 'green':
            bold.style.backgroundColor = 'purple';
            bold.value = 'purple';
            break;
        case 'purple':
            bold.style.backgroundColor = 'yellow';
            bold.value = 'yellow';
            break;
        case 'yellow':
            bold.style.backgroundColor = 'teal';
            bold.value = 'teal';
            break;
        case 'teal':
            bold.style.backgroundColor = 'blue';
            bold.value = 'blue';
            break;
        default:
            bold.value = 'blue';
            break;
    };
}