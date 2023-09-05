`use strict`
//Here you can get a random setup with your towers.
let styling = document.getElementById("heroDIV")

heroButton.addEventListener("click", function () {
    if (styling.style.display === "block") {
        styling.style.display = "none";
    } else {
        styling.style.display = "block";
    }

    console.log('smirk')
})

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
