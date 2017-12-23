let x = "twenty";

let y = parseInt(x);

if(isNaN(y)){
  console.log("x cannot be converted to a number");
}else{
  console.log("success! the numeric value of x is: " + y);
}