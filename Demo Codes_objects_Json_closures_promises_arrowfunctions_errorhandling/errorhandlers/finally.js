const PI = 3.14159;

console.log("trying to change PI!");

try{
  PI = 99;
}catch(ex){
  console.log("uh oh, an error occurred: " + ex.message); 
  // outputs: uh oh, an error occurred: Assignment to constant variable.
}finally{
  console.log("always execute code in this block");
}

console.log("Alas, it cannot be done, PI remains: " + PI);