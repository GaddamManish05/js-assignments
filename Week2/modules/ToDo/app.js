// iii. app.js - Main application
                  // TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again

import {addTask,getAllTasks,completeTask} from './task.js'

console.log(addTask("Learn JavaScript", "high", "2026-02-10"))
console.log(addTask("Complete Assignment", "medium", "2026-02-05"))
console.log(addTask("Go for Walk", "low", "2026-02-01"))

console.log("All Task :")
console.log(getAllTasks())

console.log(completeTask(3)) // marking task as completed or not 

console.log(getAllTasks()) // updated task
