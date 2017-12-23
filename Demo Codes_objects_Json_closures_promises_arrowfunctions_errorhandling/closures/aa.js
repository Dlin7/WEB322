var adder = function(newaparam){
    var summer = function(innerparam){
        return newaparam + innerparam;
    };
   return summer; 
};

