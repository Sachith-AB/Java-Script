const array=[12.3,-1,11,45,-34,3.14,5];
var integer=(array)=>{
    return array.filter(num=>Number.isInteger(num)&&num>0)
}
console.log(integer(array));
//if i want to filter integer values square values

square=(array)=>{
    filterarray=array.filter(num=>Number.isInteger(num)&&num>0).map(x=>x*x);
    return filterarray;
}
console.log(square(array));

//using spread 
const month=["JAN","FEB","MAR","APR"];
let month2;
(function(){
    month2=[...month];
    month[0]="DEC";
})();

console.log(month2);

//destructors assigment

const temp={
    today:20,
    tommorow:23
};
function temptoday (avarage){
const{today:a}=avarage;
return a;
}
console.log(temptoday(temp));

const mark={
    A:{max:100,min:70},
    B:{max:69,min:60}
}
function get_mark(mark){
    const {A:{min:M}}=mark
    return M;
}
console.log(get_mark(mark));
//print array removing unnesseasry element

var a=[1,2,3,4,5]
function remove_element(list){
const[ , ,...a]=list;
return a;

}

console.log(remove_element(a));
console.log(a);

//template literals
person={
    "Name":"Sachith",
    "Age":"21"
}
const greeting=`Hello,I am ${person.Name}.I am ${person.Age} yeaes old.`
console.log(greeting);