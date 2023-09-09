`use strict`

//CSS Color Vars
let green = "rgb(84, 222, 0, 1)";
let darkGreen = "rgb(60, 181, 0, 1)";
let brown = "rgb(176, 123, 68, 1)";
let darkBrown = "rgb(159, 120, 67, 1)";

var css = document.querySelector(':root');

function myFunction_set() {
    css.style.setProperty('--green', green);
    css.style.setProperty('--dark-green', darkGreen);
    css.style.setProperty('--brown', brown);
    css.style.setProperty('--dark-brown', darkBrown);
}

//Dropdown Functionality
function dropdown(id) {
    let change = document.getElementById(id + "Contained")

    if (change.style.display === "block") {
        change.style.display = "none";
    } else {
        change.style.display = "block";
    }
}

//Button Onclick
let heroArray = [];
let towerArray = []
let numRandom = 0

function takeHero(id) {
    let change = document.getElementById(id)

    if (change.style.backgroundColor === "rgb(176, 123, 68, 1)" || change.style.backgroundColor === "rgb(176, 123, 68)") {
        change.style.backgroundColor = "rgb(176, 123, 68, 0.5)";
        change.style.borderColor = "rgb(159, 120, 67, 0.5)"

        //thx stack 
        const index = heroArray.indexOf(id);
        if (index > -1) {
            heroArray.splice(index, 1);
        }
        console.log(heroArray)
    } else {
        change.style.backgroundColor = "rgb(176, 123, 68, 1)";
        change.style.borderColor = "rgb(159, 120, 67, 1)"

        heroArray.push(id)
        console.log(heroArray)
    }
}

function takeTower(id) {
    let change = document.getElementById(id)

    if (change.style.backgroundColor === "rgb(176, 123, 68, 1)" || change.style.backgroundColor === "rgb(176, 123, 68)") {
        change.style.backgroundColor = "rgb(176, 123, 68, 0.5)";
        change.style.borderColor = "rgb(159, 120, 67, 0.5)"

        //thx stack 
        const index = towerArray.indexOf(id);
        if (index > -1) {
            towerArray.splice(index, 1);
        }
        console.log(towerArray)
    } else {
        change.style.backgroundColor = "rgb(176, 123, 68, 1)";
        change.style.borderColor = "rgb(159, 120, 67, 1)"

        towerArray.push(id)
        console.log(towerArray)
    }
}

function num(value) {
    numRandom = value
}

//Submit
let finalBox = document.getElementById("endBox")
let finalText = document.getElementById("endDialogue")
let numTowers;

function submitData() {
    if (heroArray.length >= 1) {
        numTowers = towerArray.length + 1;
    } else {
        numTowers = towerArray.length
    }

    console.log(numTowers)

    if (numRandom != 0 && numRandom != "" && numRandom != " ") {
        finalBox.style.display = "block"

        if (numRandom < numTowers) {
            if(heroArray.length > 0){
                heroRNG = Math.floor(Math.random() )
            }
            for (i = 0; i > 1; i++) {
                let RNG = Math.floor(Math.random() * numRandom)
            }

            finalText.textContent = `You selected ${heroArray.length + towerArray.length} towers and your ${numTowers} towers are ${Math}`
        }
    } else {
        finalBox.style.display = "block"

        if (numRandom > numTowers) {
            finalText.textContent = "Yeah nah"
        }
    }
}
