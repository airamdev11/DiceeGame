function diceImage() {
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    let diceText = "dice" + randomNumber + ".png";
    let imagePath = "images/" + diceText;
    return imagePath;
}

function asignImagePath(){
    let diceQty = document.getElementsByClassName("img").length;
    let dices= document.getElementsByClassName("img");
    for (let i = 0; i < diceQty; i++){
        dices[i].setAttribute("src", diceImage());
        console.log(dices[i].getAttribute("src"));
    }
}

function compareDices(){
    let dices= document.getElementsByClassName("img");
    let frstDice = dices[0].getAttribute("src");
    let scndDice = dices[1].getAttribute("src");
    let flag = document.getElementById("flag");
    if(frstDice > scndDice){
        flag.innerHTML = "First Player Wins";
    }
    else if(frstDice < scndDice){
        flag.innerHTML = "Second Player Wins";
    }
    else {
        flag.innerHTML = "Draw";
    }
    
}

function runApp(){
    asignImagePath();
    compareDices();
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    runApp();
    btn.innerHTML = "Generate";
});