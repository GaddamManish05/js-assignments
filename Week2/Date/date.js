// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss


let date1 = new Date()
console.log(date1.getFullYear())
console.log(date1.getMonth())
console.log(date1.getDate())
console.log(date1.getDay())
console.log(date1.getHours(),date1.getMinutes(),date1.getSeconds())
console.log(date1)
console.log(date1.toString())




// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
//       let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid


// let enrollmentDeadline = new Date("2027-01-20");
// let presentDate = new Date();

if(enrollmentDeadline > presentDate){
    console.log('Enrollements are closed')
}
else{
    console.log('Enrollement are Open')
}

let message = '';

if(enrollmentDeadline.getDate() > 31 && enrollmentDeadline.getDate() < 0){
    message += 'Invalid With Date'
}

if(enrollmentDeadline.getMonth() > 12 && enrollmentDeadline.getMonth() < 0){
    message += ',Invalid With Month'
}

if(enrollmentDeadline.getFullYear() > 1970 && enrollmentDeadline.getFullYear() < presentDate){
    message += 'Invalid With Year'
}

console.log(message)




// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
//     let dob = "2000-05-15";


// Tasks:
//         1. Calculate exact age in years



let dob = new Date("2000-05-15");
let presentDate = new Date()
let age = presentDate.getFullYear() - dob.getFullYear()
if(presentDate.getMonth() < 5){
    age -= 1
}
console.log(age)

