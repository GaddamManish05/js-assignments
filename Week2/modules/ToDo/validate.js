          
        // i. validator.js - Input validation
        //               // TODO: Export these validation functions
            
        //               // 1. Validate task title (not empty, min 3 chars)
        //               function validateTitle(title) {
        //                 // Your code here
        //               }
                
        //               // 2. Validate priority (must be: low, medium, high)
        //               function validatePriority(priority) {
        //                 // Your code here
        //               }
    
        //               // 3. Validate due date (must be future date)
        //               function validateDueDate(date) {
        //                 // Your code here
        //               }

function validateTitle(title){
    if(!title && title.length < 3){
        return false
    }
    return true
}
function validatePriority(priority){
   let mark = ['low','medium','high']
   let change = false
   for(let i of mark){
      if(priority === i){
         change = true
         break;
      }
   }
   return change;
}
function validateDueDate(date){
    let newDate = new Date(date);
    let pdate = new Date();
    if(pdate > newDate){
        return false
    }
    return true
}

export {validateTitle,validatePriority,validateDueDate};