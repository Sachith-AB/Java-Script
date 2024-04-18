//CREATE CLASS
function make_class(){
    class thermost{
        constructor(temp){
            this._temp=5/9*(temp-32);
        }

        get tempeture(){
            return  this._temp;
        }
        set tempeture(update_temp){
            return this.temp=update_temp;
        }
        
    }
    return thermost;
}
const thermost=make_class();
const t=new thermost(70);
let temp=thermost.tempeture;
thermost.tempeture=26;
temp=thermost.tempeture;
console.log(temp);

//convert to capital letter in string
import{capital_string} from "./string function.js" 
const cap=capital_string("hello");
console.log(cap);
