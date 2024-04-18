//usong switch case
function operator(a,b){
a===b?console.log("good"):console.log("bad"); 
}

console.log(operator(2,1));

function chech_sign(value){
    value>0?"positive":value<0?"negative":"negative";
}
console.log(chech_sign(10));

//using concat to merge to array
arr1=[1,2,3];
arr2=[4,5];
function concat(arr1,arr2){
    return arr1.concat(arr2);
}
console.log(concat(arr1,arr2));

//convert concat function to arrow function

var concat=(arr1,arr2)=> arr1.concat(arr2);
console.log(concat(arr1,arr2));