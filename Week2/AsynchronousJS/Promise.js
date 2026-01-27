let futureAvailability = true


let promiseObj = new Promise((fullfil,reject)=>{
    setTimeout(()=>{
        if(futureAvailability === true){
            fullfil("HellO....How are you");
        }else{
            reject("Sorry...Not available");
        }
    },5000);
});