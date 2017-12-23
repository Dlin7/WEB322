let web322promise = new Promise(function(resolve, reject){
    if (true) {
        resolve("passed web322, here's your job offer letter");
    }else {
        reject("failed web322, no job for you");
    }

});

//console.log(web322promise);

web322promise.then(function(resolveparam){
    console.log(resolveparam);
}, 
function(rejectparam){
    console.log(rejectparam);
});