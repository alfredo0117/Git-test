//rock = 0
//paper = 1
//scissors = 2

const player = 2;
const computer = Math.floor(Math.random() * 3);


if (player === 0) {
    if (computer === 0){
        console.log('Draw')
    }
} else if (computer === 1) {
    console.log('Computer wins')
} else if (computer === 2) {
    console.log('Player wins')
} else {
    console.log('An error occured')
} if (player === 1) {
    if (computer === 0) {
        console.log('Player wins')
    } else if(computer === 1) {
        console.log('Draw')
    } else if (computer === 2){
        console.log('Computer wins')
    } else{
        console.log('An error occured')
    }
} if (player === 2) {
    if (computer === 0) {
        console.log('Computer wins')
    } else if (computer === 1) {
        console.log ('Player wins')
    } else if (computer === 2) {
        console.log('Draw')
    } else {
        console.log('An error occured')
    }
}