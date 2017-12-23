exports.sumofints = function(num1,num2) {
    return num1+num2;
}

module.exports = {
    sumint: function(num1, num2) {
        return num1 + num2;
    },
    prodints: function(num1, num2) {
        return num1 * num2;
    },
    divints: function(num1, num2) {
        return num1/num2;
    }
}

console.log(this.sumofints(1,1))