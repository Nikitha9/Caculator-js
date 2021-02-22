 export function Display(val) { 
    document.getElementById("result").value+=val 
} 
         
 export function Solve() { 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 
           
        
export function Clr() { 
    document.getElementById("result").value = "" 
} 


