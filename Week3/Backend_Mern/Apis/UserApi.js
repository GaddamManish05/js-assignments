

//body parsing middleware

// creating middleware 

import exp from 'express'

export const UserApp = exp.Router()
// storing users data
let users = [];
//using middel wares
function middleware1(req,res,next){
    console.log("middleware 1 executed");
    next();
}
UserApp.use(middleware1);
// get request handling (read user)
UserApp.get('/users',middleware1,(req,res)=>{
    // send http request to client
    res.status(200).json({message : 'all users', payload : users});

})

//post req handling route (create user)
UserApp.post('/user',(req,res)=>{
    //send res
    let newUser = req.body
    users.push(newUser)
    res.json({message:"User Created Successfully",payload : users})
})

//put req handling (update user)
UserApp.put('/users/id',(req,res)=>{
    let updatedUsers = req.body
    
    let CheckUsersIndex = users.findIndex(user => user.id === updatedUsers.id)
    if(CheckUsersIndex === -1){
       res.status(404).json({message : "User Not Found"})
    }else{
    let deleteUser = users.splice(CheckUsersIndex,1,updatedUsers);
    res.status(200).json({message : "User Modified"})
    }
})
UserApp.get('/users/:id',(req,res) => {

    let userId = Number(req.params.id)

    let user = users.find(userObj => userObj.id === userId);
    if(!user){
        return res.status(404).json({message : 'User Not Found'})
    }
    res.status(200).json({message : 'User Found', payload : user})
})

//delete req handling route (delete user)
UserApp.delete('/users/:id',(req,res)=>{
    let deleteUser =  Number(req.params.id)
    let user = users.findIndex(user => user.id === deleteUser)
    if(user === -1){
        return res.status(404).json({message : 'User Not Found'})
    }
    users.splice(deleteUser,1)
    return res.status(200).json({message : "Deleted Useer" , user : deleteUser})
})
