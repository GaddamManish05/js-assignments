// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
//   -> Sort courses by price (high → low)
//   -> Extract { title, price } only
//   -> Calculate total value of published courses
//   -> Add a new course immutably

import {users,courses,cart,roles} from './UserProcessing.js'


let FilteredPublishers = courses.filter(ele => ele.published)
let SortByPrice = [...FilteredPublishers].sort((a,b) => b.price - a.price)
let FilterTitleprices = courses.filter(ele => ele.title && ele.price)
let CalpriceOfPublished = FilteredPublishers.reduce((sum,ele) => sum += ele.price,0)

const newCourse = {
  id : 104,
  title : "Java",
  price : 1699,
  published : false
}

const UpdatedCourse = [...courses,newCourse]


