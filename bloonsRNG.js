`use strict`;

//CSS Color Vars
let green = "rgb(84, 222, 0, 1)";
let darkGreen = "rgb(60, 181, 0, 1)";
let brown = "rgb(176, 123, 68, 1)";
let darkBrown = "rgb(159, 120, 67, 1)";

var css = document.querySelector(":root");

function myFunction_set() {
    css.style.setProperty("--green", green);
    css.style.setProperty("--dark-green", darkGreen);
    css.style.setProperty("--brown", brown);
    css.style.setProperty("--dark-brown", darkBrown);
}

//Dropdown Functionality
function dropdown(id) {
    let change = document.getElementById(id + "Contained");

    if (change.style.display === "block") {
        change.style.display = "none";
    } else {
        change.style.display = "block";
    }
}

//Button Onclick
let heroArray = [];
let towerArray = [];
let numRandom = 0;

function takeHero(id) {
    let change = document.getElementById(id);

    if (
        change.style.backgroundColor === "rgb(176, 123, 68, 1)" ||
        change.style.backgroundColor === "rgb(176, 123, 68)"
    ) {
        change.style.backgroundColor = "rgb(176, 123, 68, 0.5)";
        change.style.borderColor = "rgb(159, 120, 67, 0.5)";

        //thx stack
        const index = heroArray.indexOf(id);
        if (index > -1) {
            heroArray.splice(index, 1);
        }
        console.log(heroArray);
    } else {
        change.style.backgroundColor = "rgb(176, 123, 68, 1)";
        change.style.borderColor = "rgb(159, 120, 67, 1)";

        heroArray.push(id);
        console.log(heroArray);
    }
}

function takeTower(id) {
    let change = document.getElementById(id);

    if (
        change.style.backgroundColor === "rgb(176, 123, 68, 1)" ||
        change.style.backgroundColor === "rgb(176, 123, 68)"
    ) {
        change.style.backgroundColor = "rgb(176, 123, 68, 0.5)";
        change.style.borderColor = "rgb(159, 120, 67, 0.5)";

        //thx stack
        const index = towerArray.indexOf(id);
        if (index > -1) {
            towerArray.splice(index, 1);
        }
        console.log(towerArray);
    } else {
        change.style.backgroundColor = "rgb(176, 123, 68, 1)";
        change.style.borderColor = "rgb(159, 120, 67, 1)";

        towerArray.push(id);
        console.log(towerArray);
    }
}

function num(value) {
    numRandom = value;
    console.log(numRandom);
}

//Submit
let finalBox = document.getElementById("endBox");
let finalText = document.getElementById("endDialogue");
let numTowers;

function submitData() {
    //Sets numTowers with one hero
    if (heroArray.length >= 1) {
        numTowers = towerArray.length + 1;
    } else {
        numTowers = towerArray.length;
    }

    finalBox.style.display = "block";

    //Final display text
    if (numRandom == 0 || towerArray.length + heroArray.length == 0) {
        //No towers to rando
        finalText.textContent = `You have selected no towers.`;
    } else if (numRandom == 1 || towerArray.length == 0 || (heroArray.length == 0 && towerArray.length == 1)) {
        //Only one tower to rando. Defaults to hero if hero otherwise one tower
        if (heroArray.length > 0) {
            let chosenHero;
            let heroRNG;

            heroRNG = Math.floor(Math.random() * heroArray.length);
            chosenHero = heroArray[heroRNG];

            finalText.textContent = `You selected ${
                heroArray.length + towerArray.length
            } heros and 1 hero to be chosen, and your hero is ${chosenHero}.`;
        } else {
            for (i = 0; i < numRandom; i++) {
                let towerRNG;
                let chosenTowers;

                towerRNG = Math.floor(Math.random() * towerArray.length);
                chosenTowers = towerArray[towerRNG];

                finalText.textContent = `You selected ${
                    heroArray.length + towerArray.length
                } towers, and your tower is ${chosenTowers}.`;
            }
        }
    } else {
        //Several towers to rando
        if (heroArray.length > 0) {
            let chosenHero;
            let heroRNG;

            heroRNG = Math.floor(Math.random() * heroArray.length);
            chosenHero = heroArray[heroRNG];

            finalText.textContent = `You selected ${
                heroArray.length + towerArray.length
            } towers and ${numTowers} overall towers. Your hero is ${chosenHero} and your towers are `;

            for (i = 0; i < numRandom - 1; i++) {
                let towerRNG;
                let chosenTowers;

                towerRNG = Math.floor(Math.random() * towerArray.length);
                chosenTowers = towerArray[towerRNG];

                if (i + 1 != (numRandom - 1)) {
                    finalText.textContent += `${chosenTowers}, `;
                } else {
                    finalText.textContent += `and ${chosenTowers}.`;
                }
            }
        } else {
            finalText.textContent = `You selected no hero, ${
                heroArray.length + towerArray.length
            } towers and ${numTowers} overall towers. Your towers are `;

            for (i = 0; i < numRandom; i++) {
                let towerRNG;
                let chosenTowers;

                towerRNG = Math.floor(Math.random() * towerArray.length);
                chosenTowers = towerArray[towerRNG];

                if (i + 1 != numRandom) {
                    finalText.textContent += `${chosenTowers}, `;
                } else {
                    finalText.textContent += `and ${chosenTowers}.`;
                }
            }
        }
    }
}
