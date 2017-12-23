var multiNums = function(op1, op2) {

    return op1 * op2;
};

console.log(multiNums(4,6)); //24

//======= shortens the developer's code below (same result)

var multiNums = (op1, op2) => op1 * op2;

console.log(multiNums(4,6)); //24