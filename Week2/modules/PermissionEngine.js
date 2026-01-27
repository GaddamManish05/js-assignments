// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
//   -> Check if student can delete
//   -> Create a flat list of all unique permissions
//   -> Add new role moderator immutably

import {users,courses,cart,roles} from './UserProcessing.js'

// const roles = {
//   admin: ["create", "update", "delete", "view"],
//   student: ["view"]
// };

let roleNames = Object.keys(roles); // Check if student can delete
let canStudentDelete = roles.student.includes("delete"); // Flat unique permission list

let updatedRoles = {
  ...roles,
  moderator: ["update", "view"]
};

console.log(roleNames);
console.log(canStudentDelete);
console.log(updatedRoles);

