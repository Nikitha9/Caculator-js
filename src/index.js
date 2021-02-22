// import { Display,Solve,Clr } from './util.js' ;
// console.log(Display());
// console.log(Solve());
// console.log(Clr());

function Display(val) { 
    document.getElementById("result").value+=val 
} 
         //function that evaluates the digit and return result 
function Solve() { 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 
           
         //function that clear the display 
function Clr() { 
    document.getElementById("result").value = "" 
} 

