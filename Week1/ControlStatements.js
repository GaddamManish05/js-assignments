// Smart Login Status Engine Task 1

let isLogin = false;
let isProfileComplete = true;
// if islogin and isprofilecomplete is completed then 'welcome'
let msg ='';
if(isLogin == true ){
    if(isProfileComplete == true ){ // checking if login person as completed profile
        msg = 'Welcome Back';
    }
    else{
        msg = 'Please complete ur profile';// if logined person is not completed profile 
    }
}
else{
    msg = 'Please Log in In'; // if no login and no profile update
}
console.log(msg)


// Course Price Tag Labeler Task 2

let price = 1200;
label = ''
if(price > 1000){
    label = 'Premium course';
}
else if( price > 500 && price < 1000){
    label = 'Stantdard course';
}
else{
    label = 'Budget course';
}
console.log(label)

// Task 3

let hasPaid = true;
let hasCompletedBasics = false;

let enrollMessage = (hasPaid && hasCompletedBasics) ? "Enroll Now": "Complete Requirements"; // if both are true then its enrolled if no completed requirements

console.log(enrollMessage);
