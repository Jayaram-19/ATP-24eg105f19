// Assignment 1: Daily Temperature Analyzer
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
const temperature=[32,35,28,40,38,30,42];

// Tasks:
//     1. filter() temperatures above 35
let temperaturesAbove=temperature.filter(element=>element>35)
console.log("Temperatures Above 35 ",temperaturesAbove)
//     2. map() to convert all temperatures from Celsius → Fahrenheit
let fahrenheit=temperature.map(element=>element*9/5+32)
console.log(fahrenheit,"fahrenheit")
//     3. reduce() to calculate average temperature
let sum=temperature.reduce((accumulator,element)=>accumulator+element)
console.log("Average Temperature is",(sum/temperature.length-1))
//     4. find() first temperature above 40
let firstTemperatureAbove=temperature.find(element=>element>40,0)
console.log("First Temperature Above Temperature 40 is",firstTemperatureAbove)
//     5. findIndex() of temperature 28
let findingIndex=temperature.findIndex(element=>element===28)
console.log("Index of Temperature 28 is",findingIndex)