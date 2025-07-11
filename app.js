// Task Chapter 20 – for loops nested
// Write a nested for loop to generate all combinations of two arrays: firstNames = ["Lil", "Big"] and 
// lastNames = ["Zzz", "Boom"]. Explain how many times the inner loop runs if the outer loop runs 3 
// times and the inner loop runs 2 times.Modify the nested loop to only generate names where both
// indexes are not the same.

let firstNames = ["Lil" , "Big"]
let lastNames = ["Zzz" , "Boom"]

for(i = 0 ; i < firstNames.length ; i++){
    for(j = 0; j < lastNames.length ; j++){
        let name = firstNames[i] + " " + lastNames[j]
        console.log(name)
    }

}
// if outer loop runs three times and inner loop runs two times so the
// total loops will be 9 total loops means 3x2=6 inner loops and 3 outer loops.

// if indexes are not same
for(i = 0 ; i < firstNames.length ; i++){
    for(j = 0; j < lastNames.length ; j++){
        if(i != j){
        let name = firstNames[i] + " " + lastNames[j]
        console.log(name)
        }}

}

// Chapter 21 – Changing case
// Write a program to convert a user’s input into lowercase and display it.
// Use toUpperCase() to normalize city names before comparison.
// Explain the importance of changing case in user input validation.

let userInput = prompt("Enter the city name::")
let lowerCase = userInput.toLowerCase()
console.log(lowerCase)
if(userInput=="Karachi" || userInput == "Lahore" || userInput == "Islamabad"){
    console.log(userInput.toUpperCase())
}
// Normally one don't know in which case user will be giving it's details so
// thats why we use Cases to compare and execute our program

// Chapter 22 – Strings: measuring length and extracting parts
// Write a script to extract the first 5 characters from the string "JavaScriptRocks".
// Get the last character of any user-provided string.
// Ask the user to input their full name and display the length of the input.

let script = "JavaScriptRocks"
let part = script.slice(0,5)
console.log(part)

let userPrompt = prompt("Enter any word")
let lastChar = userPrompt.charAt(userPrompt.length - 1)
console.log(lastChar)

let userName = prompt("Enter your Full name::")
console.log(userName , userName.length)


// Chapter 23 – Strings: finding segments
// Use indexOf to find the position of “dog” in "The lazy dog sleeps.".
// Write a script that checks if the word “hello” exists in user input.
// How does indexOf behave if the string isn’t found?

let sentence = "The lazy dog sleeps"
console.log(sentence.indexOf("dog"))
let input = "hello World!!"
if(input.indexOf("hello") != -1){
    console.log("word is here")
}
//If there is no word then indexOf returns -1


// Chapter 24 – Strings: finding a character at a location
// Write a script to find the character at position 4 in the word “JavaScript”.
// Ask a user for a string and a position; return the character at that position.
// What happens when the index is out of bounds? Test it.

let word = "JavaScript"
console.log(word.charAt(4))

let userinput = prompt("Write any String")
let userinput2 = prompt("Which character's position you want from the string")
console.log(userinput.charAt(userinput2))
//Nothing will appear when index is out of bound

// Chapter 25 – Strings: replacing characters
// Replace the word “bad” with “good” in the string "This is a bad example.".
// Replace all instances of "JS" with "JavaScript" in a given sentence.
// Use replace() to customize a template message like "Hello, NAME".

let eg = "This is bad example"
let replacement = eg.replace("bad" , "good")
console.log(replacement)
let eg2 = "JS"
let replace= eg2.replace("JS" , "JavaScript")
console.log(replace)

let temp = "Hello ,Name"
let rep = temp.replace("Name", "M.Qasim")
console.log(rep)

// Chapter 26 – Rounding numbers
// Demonstrate rounding 2.6 using Math.round, Math.floor, and Math.ceil.
// Ask the user to input a number and round it to the nearest integer.
// Compare Math.floor(-2.9) and Math.ceil(-2.9). Explain the difference.

let num = 2.6
let round = Math.round(num)
let floor = Math.floor(num)
let ceil = Math.ceil(num)
console.log(round , floor , ceil)

let numUser= +prompt("Enter any decimal number::")
let roundoff = Math.round(numUser)
console.log(roundoff)

// Chapter 27 – Generating random numbers
// Generate a random number between 1 and 6 (like a dice roll).
// Write a coin toss simulator using Math.random().
// Simulate a random password generator that picks a number between 1000 and 9999.

let dice = Math.random(0,1)*6
console.log(Math.round(dice))

let coin = Math.random()
if (coin < 0.5){
    console.log("Heads")
}else{
    console.log("Tails")
}

let password = Math.floor(Math.random() * 9000)+1000
console.log("Your password is::" + password)

// Chapter 28 – Converting strings to integers and decimals
// Convert the string "45.67" to a float and log it.
// Parse an integer from the string "123px". What’s the result?
// What happens when you try to parse "abc" to an integer?

let string = "45.67"
let integer = Number(string)
console.log(typeof(integer))

let string2 = "123px"
let integ = parseInt(string2)
console.log(integ) //output : 123

//if you parse abc with an integer NaN is the result

// Chapter 29 – Converting strings to numbers, numbers to strings
// Convert a number to a string and show its type using typeof.
// Convert the string "2025" to a number and add 10.
// Explain the difference between parseInt and Number() using examples.

let number = 123
let change = String(number)
console.log(typeof(change))

let str = "2025"
let chng = Number(str) + 10
console.log(chng)
// parseInt only convert integer(before decimal points) to integer 
// for eg. "40" converts to 40
// 40.85 converts 40
// Number() converts entire string into number
// "40.85" converts into 40.85 exact

// Chapter 30 – Controlling the length of decimals
// Use .toFixed(2) to display only 2 decimal places of 123.45678.
// How would you convert "12.999" to a number and round it to 1 decimal?
// Ask the user to input a decimal and display it rounded to 3 decimal places.

let dec = 123.45678
let point = dec.toFixed(2)
console.log(point)

let numbers = "12.999"
let convert = Number(numbers)
let fix = convert.toFixed(1)
console.log(fix)

let user = +prompt("Enter any decimal number::")
let conv = user.toFixed(3)
console.log(conv)

// Chapter 31 – Getting the current date and time
// Write a script to display the current date and time using new Date().
// Extract and display only the year from the current date.
// Display a greeting based on current time (AM/PM).

let date = new Date()
console.log(date)
console.log(date.getFullYear())
let hours = date.getHours()
if(hours < 12){
    unit = "AM"
}else{
    unit = "PM"
}
console.log("Welcome , User " + date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds() +" "+ unit)

// Chapter 32 – Extracting parts of the date and time
// Display the current day, month, and year separately.
// Extract the hours and minutes from the current time.
// Create a digital clock format like "13:45" using Date object methods.

console.log(date.getDate())
console.log(date.getMonth())
console.log(date.getFullYear())
console.log("hour" + date.getHours())
console.log("Minutes " + date.getMinutes()) 