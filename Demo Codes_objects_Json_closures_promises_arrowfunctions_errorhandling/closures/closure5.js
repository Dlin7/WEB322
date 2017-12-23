var adder = function(innerparam){
    
    var innerSummer = function(newparam){
        return newparam + innerparam;
    };
    return innerSummer;
};
var addints = new adder();
console.log(addints(7));


var sum3 = new adder(3);
var sum4 = new adder(4);
var sum5 = new adder(5);

console.log(sum3(5));
console.log(sum4(6));
console.log(sum5(7));

