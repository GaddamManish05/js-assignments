// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
//   -> Calculate total cart amount
//   -> Increase quantity of a course (immutably)
//   -> Remove a course from cart
//   -> Check if all cart items are paid courses

// const cart = [
//   { courseId: 101, qty: 1 },
//   { courseId: 103, qty: 2 }
// ];

import {users,courses,cart,roles} from './UserProcessing.js'

let MappedCourses = courses.map(ele => {
    const extra = cart.find(p => p.courseId === ele.id)
    return {...courses,extra}
})

let TotalCartAmount = MappedCourses.reduce((total,ele) => total += ele.price * ele.qty,0)

let Increasequantity = cart.map(ele => ele.courseId === 101 ? {...items,qty : ele.qty + 1} : ele)

let RemoveCourse = cart.filter(ele => ele.courseId !== 103)

let PaidCourseslength = cart.filter(ele => ele.price > 0).length()

let allPaid = PaidCourses === cart.length

  ///         (OR)

let PaidCourses = cart.reduce((acc,ele) => acc && ele.price > 0,true)


