// Task 1

// You are building a shopping cart summary for an e-commerce website.

// Test Data :
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];


// Use filter() to get only inStock products
// Use map() to create a new array with:  { name, totalPrice }
// Use reduce() to calculate grand total cart value
// Use find() to get details of "Mouse"
// Use findIndex() to find the position of "Keyboard"

const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
// we return if instocks are to be true
let instocks = cart.filter(stock => stock.inStock == true)
// here the total woll return in to an array with total price
let arr = cart.map(total => [total.name,total.price * total.quantity])
// we intially we assign total value with '0' and add element in cart of prices
let totalValue = cart.reduce((total,ele) => total += ele.price,0)
// we return the element if equals with 'Mouse'
let details = cart.find(ele => ele.name == 'Mouse')
// here we return index of 'keyword'
let findIdx = cart.findIndex(ele => ele.name == 'Keyboard')

console.log(instocks)
console.log(arr)
console.log(totalValue)
console.log(details)
console.log(findIdx)


// Task 5


// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
    
// filter() students who passed (marks ≥ 40)
// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D

// reduce() to calculate average marks
// find() the student who scored 92
// findIndex() of student "Kiran"

const students = [
    { id: 1, name: "Ravi", marks: 78 },
    { id: 2, name: "Anjali", marks: 92 },
    { id: 3, name: "Kiran", marks: 35 },
    { id: 4, name: "Sneha", marks: 88 },
    { id: 5, name: "Arjun", marks: 40 }
];

let mark = students.filter(mrk => mrk.marks >= 40) // filtering all marks which are greater then 40
let mapGraade = students.map(ele => {
    if(ele.marks >= 90){ // mapping grade based on marks and returning
        return 'A'
    }
    else if(ele.marks < 90 && ele.marks >= 75){
        return 'B'
    }
    else if(ele.marks < 75 && ele.marks >= 60){
        return 'C'
    }
    else{
        return 'D'
    }
})
let average = students.reduce((sum,ele) => sum += ele.marks,0) / students.length; // average of all marks 
let findValue = students.find(ele => ele.marks == 92 ) // finding 92
let findIdxOfname = students.findIndex(ele => ele.name == 'Kiran') // finding index of name 'kiran'
console.log(mark)
console.log(mapGraade)
console.log(average)
console.log(findValue)
console.log(findIdxOfname)



// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"


const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

let Dept_It = employees.filter(ele => ele.department == "IT") // filtering department if IT
let HikeSalary = employees.map(ele => ele.salary * 1.10) // //Adding all salaries to 10% gains
let salarypay = employees.reduce((sum,ele) => sum += ele.salary,0) // sum of all Salaries
let emp = employees.find(ele => ele.salary == 30000) // finding 30000
let findname = employees.findIndex(ele => ele.name == "Neha") //find index of neha
console.log(Dept_It)
console.log(HikeSalary)
console.log(salarypay)
console.log(emp)
console.log(findname)


// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
// const movies = [
//   { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
//   { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
//   { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
//   { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
// ];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"

//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

let filterGenre = movies.filter(ele => ele.genre == "Sci-Fi")
let ReurnMve = movies.filter(movie => movie.title === "Inception").map(movie => `${movie.title} (${movie.rating})`)
let averageOfrating = movies.reduce((sum,ele) => sum += ele.rating,0) / movies.length
let findMovie = movies.find(ele => ele.title == "Joker")
let FindMveIndx = movies.findIndex(ele => ele.title =="Avengers")

console.log(filterGenre)
console.log(ReurnMve)
console.log(averageOfrating)
console.log(findMovie)
console.log(FindMveIndx)

// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
// const transactions = [
//   { id: 1, type: "credit", amount: 5000 },
//   { id: 2, type: "debit", amount: 2000 },
//   { id: 3, type: "credit", amount: 10000 },
//   { id: 4, type: "debit", amount: 3000 }
// ];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000


    const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

let transaction = transactions.filter(ele => ele.type == "credit") // filtering type of 'credits' of customers
let OneTrans = transactions.map(ele => ele.amount) // mapping to amounts
let FinalAmount = transactions.reduce((sum,ele) => { // adding and subtract of amount depand upon customer of credit or debit of whole sum
    if(ele.type == "credit"){
        sum += ele.amount
    }
    else{
        sum -= ele.amount
    }
    return sum
},0)
let FindDebt = transactions.find(ele => ele.type == "debit") // find type of 'debit'
let FindIdxAmt = transactions.findIndex(ele => ele.amount == 10000) // find index of amount 10000

console.log(transaction)
console.log(OneTrans)
console.log(FinalAmount)
console.log(FindDebt)
console.log(FindIdxAmt)


