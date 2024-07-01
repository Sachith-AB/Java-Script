odd=(number)=>{
    if(number < 1 || number > 30){
        console.log("Out of range")
    }else{
        if(number % 2 === 0){
            return false;
        }else{
            return true;
        }
    }
}
console.log(odd(0));