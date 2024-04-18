//function using js
function print(){
    console.log("This is print function");
}
print();

//passing argument in to function
function add(a,b){
    return a+b;
}
console.log(add(1,2));

//define global variable
var global=10;
function func1(){
    oopsglobal=0;
}
function func2(){
    var output=" ";
    if(typeof global != "undefined"){
        output=output+"myglobal:"+global;
    }
    if(typeof oopsglobal != "undefined"){
        output=output+"oopglobal:"+oopsglobal;
    }
    console.log(output);
}
func1();
func2();
var wear=10;
function w(){
   return  wear=5;
 
}
console.log(wear);
console.log(w());

var array= [1,2,3,4,5];
function text(array,item){
    array.push(item);
    return array;
}
console.log(text(array,6));
console.log(JSON.stringify(array));
