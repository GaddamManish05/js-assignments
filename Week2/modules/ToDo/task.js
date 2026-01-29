
//  ii. task.js - Task operations
//                     // TODO: Import validator functions
//                     // import { ... } from './validator.js';
                    
//                     const tasks = [];
                    
//                     // 1. Add new task
//                     function addTask(title, priority, dueDate) {
//                       // Validate using imported functions
//                       // If valid, add to tasks array
//                       // Return success/error message
//                     }
                    
//                     // 2. Get all tasks
//                     function getAllTasks() {
//                       // Return all tasks
//                     }
                    
                    // 3. Mark task as complete
                    // function completeTask(taskId) {
                    //   // Find task and mark as complete
                    // }

//                   // Export functions


import {validateTitle,validatePriority,validateDueDate} from './validate.js';

const tasks = [];
let id = 1;
function addTask(title,priority,date){
    if(!validateTitle(title)){
        return "Error : Invalid Title"
    }
    if(!validatePriority(priority)){
        return "Error : Invalid Priority"
    }
    if(!validateDueDate(date)){
        return "Error : Invalid Date"
    }
    let task = {
        id : id++,
        title,
        priority,
        date,
        completed : false
    }
    tasks.push(task)
    return "Task Added Successfully"
}

function getAllTasks() {
    return tasks
}

function completeTask(taskId){
   let FindTask = tasks.find(t => t.id === taskId)
   if(!FindTask){
       return "Task Not Found"
   }
   FindTask.completed = true
   return "Task Marked as completed";
}

export {addTask,getAllTasks,completeTask}