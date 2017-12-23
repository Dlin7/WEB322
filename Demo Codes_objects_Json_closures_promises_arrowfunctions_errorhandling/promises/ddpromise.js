let web322Promise = new Promise(function(resolve, reject){
var checkflag = true;
    if (checkflag){
    resolve("passed web322, heres your job offer letter");
    }else {
    reject("failed web322, no job for you");
    }
});

//console.log(web322Promise);
web322Promise.then(function(resolveparam){
console.log(resolveparam);
}, 
function(rejectparam){
    console.log(rejectparam);
})

