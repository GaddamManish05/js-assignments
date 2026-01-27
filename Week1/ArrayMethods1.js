// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const temperatures = [32, 35, 28, 40, 38, 30, 42];

let temp = temperatures.filter(temp => temp > 35) // filtering temperature > 35
let farhanhit = temperatures.map(farhan => {
    farhan = (farhan * 9/5 ) + 32 // converting (map) *C to farhanheit
    return farhan
})
let average = temperatures.reduce((acc,ele) => acc + ele) / temperatures.length // Finding Average of Tempertaures 
let firstABove = temperatures.find(temp =>  temp > 40) // finding  40 temp
let findIdx = temperatures.findIndex(temp => temp == 28) // Finding index of 28*C
console.log(temp)
console.log(farhanhit)
console.log(average)
console.log(firstABove)
console.log(findIdx)

// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"


const courses = ["javascript", "react", "node", "mongodb", "express"];
let length = courses.filter(len => len.length > 5) // checking wheather length of each string greater then 5
let uppercase = courses.map(upper => (upper.toUpperCase())) //converting all into uppercase
let single = courses.reduce((acc,ele) => acc+=ele,'') // Concatenating all string into one
let [a,b,c,d,e] = single // unpacking
let findele = courses.find(ele => ele == 'react') // finding 'react'
let findIdx1 = courses.findIndex(ele => ele == 'node') // finding index of 'node'

console.log(length)
console.log(uppercase)
console.log(single)
console.log(findele)
console.log(findIdx)


// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92


const marks = [78, 92, 35, 88, 40, 67];

let mark = marks.filter(mrk => mrk >= 40)
let add = marks.map(sum => sum + 5)
let highest = marks.reduce((max,ele) => max < ele ? ele : max)
let findele1 = marks.find(fi => fi == 40)
let findIdx2 = marks.findIndex(fi => fi == 92)

console.log(mark)
console.log(add)
console.log(highest)
console.log(findele1)
console.log(findIdx1)
