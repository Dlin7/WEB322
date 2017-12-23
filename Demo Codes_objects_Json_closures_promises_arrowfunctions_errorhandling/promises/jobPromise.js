
//promises are native to node.js
var promiseForWeb322 = new Promise(function(resolve, reject){
    //resolve promise -do what you promised
    var checker = true;
    if(checker){
        resolve("job promise fulfilled  - here's your job offer");
    }else{
        reject("failed web programming - no job offer for you");
    } 
});
promiseForWeb322.then((resolvevalue) => {
    console.log("inside resolve code block");
console.log(resolvevalue);
}, (rejectreason)=>{
    console.log("inside reject code block");
console.log(rejectreason);
});



