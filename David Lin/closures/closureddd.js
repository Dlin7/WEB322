var superAdder = function(localparam) {
    var innerSummer = function(newparam) {
        return newparam + localparam;
    };
    return innerSummer;
};

//console.log(superAdder(5));

var summer3 = new superAdder(8);
var summer4 = new superAdder(10);
var summer5 = new superAdder(12);

console.log(summer3(3));
console.log(summer4(4));
console.log(summer5(5));

console.dir(superAdder);
console.dir(summer4);
console.dir(summer4);
console.dir(summer4);