//(parameters) =>{return value};
var multnums = function(op1, op2){
    var numprod = op1 * op2;
    console.log(numprod);
};
multnums(6,8);

//=========convert to fat arrow function===============

var multnums = (op1,op2) => {
   return = op1 * op2;
};
multnums(6,8);