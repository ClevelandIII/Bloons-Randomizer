`use strict`

//CSS
var root_css = document.querySelector(':root');

function myFunction_get() {
  // Get the styles (properties and values) for the root
  var root_css_styles = getComputedStyle(root_css);
}

function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  root_css.style.setProperty('--blue', 'lightblue');
}

let styling = document.getElementById("heroDIV")

heroButton.addEventListener("click", function () {
    if (styling.style.display === "block") {
        styling.style.display = "none";
    } else {
        styling.style.display = "block";
    }

    console.log('smirk')
})

// if () {
    Quincy.addEventListener("click", function () {
        document.getElementById("Quincy").style.backgroundColor = 'blue';
    })
// }

//Arrays
let heroArray = ['Quincy', 'Gwendolin', 'Striker', 'Obyn', 'Geraldo', 'Churchill', 'Ben', 'Ezilli', 'Fusty', 'Adora', 'Brickell', 'Etienne', 'Sauda', 'PSI']
let primaryArray = ['Dart', 'Boomerang', 'Bomb', 'Tack', 'Ice', 'Glue']
let militaryArray = ['Sniper', 'Sub', 'Buccaneer', 'Ace', 'Heli', 'Mortar', 'Dartling']
let magicArray = ['Wizard', 'Super', 'Ninja', 'Alchemist', 'Druid']
let supportArray = ['Banana Farm', 'Spike', 'Villiage', 'Engi', 'Beast Handler']

//RNG
let heroNum = Math.floor(Math.random() * 13)
let primaryNum = Math.floor(Math.random() * 5)
let militaryNum = Math.floor(Math.random() * 6)
let magicNum = Math.floor(Math.random() * 4)
let supportNum = Math.floor(Math.random() * 4)
console.log(heroNum, primaryNum, militaryNum, magicNum, supportNum)

//Set RNG
let hero = heroArray[heroNum]
let primary = primaryArray[primaryNum]
let military = militaryArray[militaryNum]
let magic = magicArray[magicNum]
let support = supportArray[supportNum]

//Grabber
console.log(`Your hero  is ${hero}. Your four towers are ${primary}, ${military}, ${magic} and ${support}`)
