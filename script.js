
const box = document.getElementById("dice");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const total1 = document.getElementById("total1");
const total2 = document.getElementById("total2");
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById(`btn2`);

let result = 0;
let count = 0;
let score;

box.style.visibility = "hidden";

//FUNCTION TO ROLL THE DICE
const play = () => {
    switch (score = Math.floor(Math.random() * 6) + 1) {
        case 1:
            box.style.transform = "rotateX(-90deg)";
            console.log("uno")
            window.setTimeout(() => {
                box.style.visibility = "hidden";
            }, 1000);
            break;
        case 2:
            box.style.transform = "rotateY(-90deg)";
            console.log("dos");
            break;
        case 3:
            box.style.transform = "rotateY(180deg)";
            console.log("tres");
            break;
        case 4:
            box.style.transform = "rotateY(90deg)";
            console.log("cuatro");
            break;
        case 5:
            box.style.transform = "rotateY(360deg)";
            console.log("cinco");
            break;
        case 6:
            box.style.transform = "rotateX(90deg)";
            console.log("seis");
    }
}

btn1.addEventListener('click', () => {
    box.style.visibility = "visible";
    box.style.transform = "rotateY(90deg)";
    
    play()
    // counter -= 1;
    result += score;
    score1.textContent = `Points: ${score}`;
    total1.textContent = `Total: ${result}`;
    console.log(`this is the result ${result}`);

    if (result >= 12) {
        document.getElementById("turns").textContent = `You win`;
        document.getElementById("turns").style.color = `lightseagreen`;
        btn1.style.visibility = 'hidden';
        score = 0;
        result = 0;
        // counter = 1;
    }

    else if (score == 1) {
        total1.textContent = "You lose";
        document.getElementById("cont").style.color = "red";
        btn1.style.visibility = 'hidden'
        score = 0;
        result = 0;
        document.getElementById("turns").textContent = `Game Over`;
    }
})

btn2.addEventListener('click', () => {
    score = 0;
    result = 0;
    btn1.style.visibility = "visible";
    document.getElementById("cont").style.color = "white";
    document.getElementById("turns").style.color = `white`;
    document.getElementById("turns").textContent = ``;
    score1.textContent = `Points: ${score}`;
    total1.textContent = `Total: ${result}`;
})




// function changeText(box1){
//     box1p.innerHTML = "your turn";
// }


// const play2 = () => {
//     if(result > 20){
//         score2.textContent = "You win";


//         window.setTimeout(()=>{
//          box.style.visibility="hidden";
//          total2.style.visibility="hidden";
//          }, 1000);

//     }
//     else if(score == 1){
//         score2.textContent = "You lose";
//         box.style.visibility="hidden";
//     }    
//     }

