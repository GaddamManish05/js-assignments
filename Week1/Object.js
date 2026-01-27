
// Task 1

// const user = {
//   id: 101,
//   name: "Ravi",
//   email: "ravi@gmail.com",
//   role: "student",
//   isActive: true
// };

console.log(user.name) // print the user in obj
console.log(user.email) //print there email
user.lastLogin = "2026-01-01" //updating the lastlogin date
user.role = "admin" // modifying the role to 'admin
delete user.isActive //deleting the user.isActive
console.log(Object.keys(user))

// Task 2

// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };


let total = 0
for (let subject in marks) {
  total += marks[subject]
}
console.log("Total:", total)
let average = total / Object.keys(marks).length
console.log("Average:", average)
let highestSubject = ""
let highestMarks = 0
for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject]
    highestSubject = subject
  }
}
console.log("Highest:", highestSubject)
marks.computer = 90
console.log(marks)

// Task 3

// const settings = {
//   theme: "light",
//   notifications: true,
//   autoSave: false,
//   language: "en"
// };


settings.theme = settings.theme === "light" ? "dark" : "light"
settings.autoSave = true
delete settings.notifications
Object.freeze(settings)
settings.language = "fr"
console.log(settings)
