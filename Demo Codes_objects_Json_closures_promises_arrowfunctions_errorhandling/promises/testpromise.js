let promise1 = new Promise(function(resolve, reject){
   checkval = true;
    if (checkval){
    resolve("get reward");
    }else{
    reject("did not meet the criteria");
}
});

promise1()
