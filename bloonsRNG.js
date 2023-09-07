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

//Arrays
// let heroArray = ['Quincy', 'Gwendolin', 'Striker', 'Obyn', 'Geraldo', 'Churchill', 'Ben', 'Ezilli', 'Fusty', 'Adora', 'Brickell', 'Etienne', 'Sauda', 'PSI']
// let primaryArray = ['Dart', 'Boomerang', 'Bomb', 'Tack', 'Ice', 'Glue']
// let militaryArray = ['Sniper', 'Sub', 'Buccaneer', 'Ace', 'Heli', 'Mortar', 'Dartling']
// let magicArray = ['Wizard', 'Super', 'Ninja', 'Alchemist', 'Druid']
// let supportArray = ['Banana Farm', 'Spike', 'Villiage', 'Engi', 'Beast Handler']

//RNG
// let heroNum = Math.floor(Math.random() * 13)
// let primaryNum = Math.floor(Math.random() * 5)
// let militaryNum = Math.floor(Math.random() * 6)
// let magicNum = Math.floor(Math.random() * 4)
// let supportNum = Math.floor(Math.random() * 4)
// console.log(heroNum, primaryNum, militaryNum, magicNum, supportNum)

// //Set RNG
// let hero = heroArray[heroNum]
// let primary = primaryArray[primaryNum]
// let military = militaryArray[militaryNum]
// let magic = magicArray[magicNum]
// let support = supportArray[supportNum]

// //Grabber
// console.log(`Your hero  is ${hero}. Your four towers are ${primary}, ${military}, ${magic} and ${support}`)
