//node.js Promises can be chained together
// define 4 Promises plus a 5th reward promise
let passMath = function(){
    return new Promise(function(resolve, reject){
       if(true){
        resolve('passed maths with A');
       }else{
           reject("failed maths");
       }
    });
};
let passPhysics = function(note){
    return new Promise(function(resolve, reject){
        if(true){
            resolve('passed physics with A');
           }else{
               reject("failed physics");
           }   
    });
};
let passChem = function(note){
    return new Promise(function(resolve, reject){
        if(true){
            resolve('passed chemistry with A');
           }else{
               reject("failed chemistry");
           }
    });
};
let passBio = function(note){
    return new Promise(function(resolve, reject){
        if(true){
            resolve('passed biology with A');
           }else{
               reject("failed biology");
           }
    });
};

let getFunding = function(note){
    return new Promise(function(resolve, reject){
        if(true){
        resolve(note + 'got a Stanford scholarship');
           }else{
            reject("you failed exams, fund your own studies");
           }   
    });
};
//call 1st trigger promise
passMath().then(function(result){
    return passPhysics(result);
}).then(function(){
    return passChem(result);
}).then(function(){
    passBio(result);
}).then(function(){
    return getFunding(result);
}).then(function(result){
    console.log('Applications finalized' + result);
});