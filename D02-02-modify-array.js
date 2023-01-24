/*
:computer:Write a function that takes the array below and modifies its order as follows:
let myDreamCars = [“Charger”, “Cayenne”, “Cyber Truck”, “G Wagon”, “Civic)]
•Remove the first element
•Add your dream car as the new first element
•Remove the last element
•Add your first car as the new last element
*/

const myDreamCars = ['Charger', 'Cayenne', 'Cyber Truck', 'G Wagon', 'Civic'];
const copyCars = [...myDreamCars];

const rearrangeArray = (arr) => {
    arr.shift()
    arr.unshift('Audi')
    arr.pop()
    arr.push('Lexus')
}
rearrangeArray(copyCars)
console.log(copyCars)