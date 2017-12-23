var adder = function(newarg){
    var total = function(localarg){
        return newarg + localarg;
      };
        return total;
    };

    var add5 = new adder(5);
    var add6 = new adder(6);
    var add7 = new adder(7);

    console.log(add5(2));
    console.log(add6(3));
    console.log(add7(4));

    console.dir(add5);
    console.dir(add6);
    console.dir(add7);
 