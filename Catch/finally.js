const PI = 3.13159;

console.log("trying to change PI!");

try{
    PI = 99;

}catch(ex){
    console.log("uh oh, an error occured: " + ex.message);
}finally {
    console.log("always execute code in this block");
}
